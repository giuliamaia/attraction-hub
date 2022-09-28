import './styles.scss';
import Logo from '../../components/logo';
import Button from '../../components/button';
import Link from '../../components/link';
import Input from '../../components/input';
import Header from '../../components/header';
import { auth } from '../../utils/firebase/firebase-config';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UseUserStore } from '../../stories/userStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { user, setUser } = UseUserStore();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signIn() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                navigate("/search");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        signIn();
        e.preventDefault();
    }

    return (
        <article className="login-page">
            <Header />
            <main className="login-page__main">
                <section className="login-page__main__container">
                    <Logo type="colorful" width="200px" />
                    <form className="login-page__main__container__form" onSubmit={(e) => submitForm(e)}>
                        <div className="login-page__main__container__form__body">
                            <Input type="text" placeholder="Email" name='email' onChange={(e) => setEmail(e.currentTarget.value)} />
                            <Input type="password" placeholder="Password" name='password' onChange={(e) => setPassword(e.currentTarget.value)} />
                        </div>
                        <div className="login-page__main__container__form__footer">
                            <Link text='Not register yet?' href='/register' />
                            <Button type='submit' className='default' text='SIGN IN' />
                        </div>
                    </form>
                </section>
            </main>
        </article>
    );
}

export default Login;
import { useState } from 'react';
import { auth } from '../../utils/firebase/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import Link from '../../components/link';
import Logo from '../../components/logo';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import console from 'console';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function signUp() {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential)
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                });
        }
        else {
            console.log("Passwords dont match")
        }
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        signUp();
        e.preventDefault();
    }
    return (
        <article className="register-page">
            <Header />
            <main className="register-page__main">
                <section className="register-page__main__container">
                    <Logo type="colorful" width="200px" />
                    <form className="register-page__main__container__form" onSubmit={(e) => submitForm(e)}>
                        <div className="register-page__main__container__form__body">
                            <Input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.currentTarget.value)} />
                            <Input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.currentTarget.value)} />
                            <Input type="password" placeholder="Confirm password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
                        </div>
                        <div className="register-page__main__container__form__footer">
                            <Link text="Alredy have an account?" href="/" />
                            <Button className="default" text="SIGN UP" type="submit" />
                        </div>
                    </form>
                </section>
            </main>
        </article>
    );
}

export default Register;
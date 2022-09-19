import './styles.scss';
import Logo from '../../components/logo';
import Button from '../../components/button';
import Link from '../../components/link';
import Input from '../../components/input';
import Header from '../../components/header';

const Login = () => {
    return (
        <article className="login-page">
            <Header />
            <main className="login-page__main">
                <section className="login-page__main__container">
                    <Logo type="colorful" width="200px"/>
                    <div className="login-page__main__container__form">
                        <Input type="text" placeholder="Username"/>
                        <Input type="password" placeholder="Password"/>
                    </div>
                    <div className="login-page__main__container__footer">
                        <Link text='Not register yet?' href='/register'/>
                        <Button type='default' text='SIGN IN' />
                    </div>
                </section>
            </main>
        </article>
    );
}

export default Login;
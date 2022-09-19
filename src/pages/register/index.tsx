import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import Link from '../../components/link';
import Logo from '../../components/logo';
import './styles.scss';

const Register = () => {
    return (
        <article className="register-page">
            <Header />
            <main className="register-page__main">
            <section className="register-page__main__container">
                <Logo type="colorful" width="200px"/>
                <div className="register-page__main__container__form">
                    <Input type="text" placeholder="Name"/>
                    <Input type="text" placeholder="Username"/>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <Input type="password" placeholder="Confirm password"/>
                </div>
                <div className="register-page__main__container__footer">
                    <Link text='Alredy have an account?' href='/'/>
                    <Button type='default' text='SIGN UP' />
                </div>
            </section>
            </main>
        </article>
    );
}

export default Register;
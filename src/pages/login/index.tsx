import './styles.scss';
import Logo from '../../components/logo';
import Link from '../../components/link';
import Header from '../../components/header';
import { auth } from '../../utils/firebase/firebase-config';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UseUserStore } from '../../stores/userStore';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Notification, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { error_message } from '../../utils/ts-utils/notification';

const Login = () => {
    const { user, setUser } = UseUserStore();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    function signIn(email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                console.log(user)
                navigate("/search");
            })
            .catch((error) => {
                console.log(error.code);
                setError(error.code)
            });
    }

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value ? null : 'Invalid password'),
        },
    });

    return (
        <article className="login-page">
            <Header />
            <main className="login-page__main">
                <Box sx={{ maxWidth: 300 }} mx="auto" className="login-page__main__container">
                    <form onSubmit={form.onSubmit((values) => {
                        signIn(values.email, values.password);
                    })}>
                        <Logo type="colorful" width="200px" />
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="your@email.com"
                            {...form.getInputProps('email')}
                        />

                        <PasswordInput
                            mt="sm"
                            withAsterisk
                            label="Password"
                            placeholder="Password"
                            {...form.getInputProps('password')}
                        />

                        <Group position="right" mt="md">
                            <Link text='Not register yet?' href='/register' />
                            <Button type="submit" color="indigo">Sign In</Button>
                        </Group>
                    </form>
                </Box>
                {
                    error ?
                        <Notification color="red" style={{ position: 'absolute', bottom: 20, left: 20 }} onClose={() => { setError("") }}>
                            {error_message(error)}
                        </Notification>
                        : null
                }
            </main>
        </article>
    );
}

export default Login;
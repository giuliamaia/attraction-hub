import { useState } from 'react';
import { auth } from '../../utils/firebase/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Header from '../../components/header';
import Link from '../../components/link';
import Logo from '../../components/logo';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { Box, Group, PasswordInput, Button, TextInput, Notification } from '@mantine/core';
import { useForm } from '@mantine/form';
import { error_message } from '../../utils/ts-utils/notification';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("");

    function signUp(email: string, password: string) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                navigate("/");
            })
            .catch((error) => {
                setError(error.code);
                console.log(error.code);
            });
    }


    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
        },
    });

    return (
        <article className="register-page">
            <Header />
            <main className="register-page__main">
                <Box sx={{ maxWidth: 340 }} mx="auto" className="register-page__main__container">
                    <Logo type="colorful" width="200px" />
                    <form onSubmit={form.onSubmit((values) => {
                        signUp(values.email, values.password);
                    })}>
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

                        <PasswordInput
                            mt="sm"
                            withAsterisk
                            label="Confirm password"
                            placeholder="Confirm password"
                            {...form.getInputProps('confirmPassword')}
                        />

                        <Group position="right" mt="md">
                            <Link text="Alredy have an account?" href="/" />
                            <Button type="submit" color="indigo">Sign Up</Button>
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

export default Register;
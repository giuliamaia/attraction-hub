export function error_message(text: string) {
    switch (text) {
        case 'auth/user-not-found':
            return 'User not found.';
        case 'auth/weak-password':
            return 'Weak password.';
        case 'auth/email-already-in-use':
            return 'Email alredy in use.';
        case 'auth/wrong-password':
            return 'Wrong password.';
        default:
            return 'Authentication failed.';
    }
}
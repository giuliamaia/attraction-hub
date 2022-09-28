import { MouseEvent } from 'react';
import './styles.scss';

interface ButtonProps {
    type?: 'submit' | 'reset' | 'button';
    className: string;
    text: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Button = ({ className, type, text, onClick }: ButtonProps) => {
    return (
        <button className={className} type={type} onClick={onClick}>{text}</button>
    );
}

export default Button;
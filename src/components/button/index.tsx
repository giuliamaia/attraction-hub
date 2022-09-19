import './styles.scss';

interface ButtonProps {
    type: string;
    text: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button className={props.type}>{props.text}</button>
    );
}

export default Button;
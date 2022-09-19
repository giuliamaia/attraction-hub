import './styles.scss';

interface InputProps {
    type: string;
    placeholder: string;
}

const Input = (props: InputProps) => {
    return (
        <div className="input-container">
           <input type={props.type} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;
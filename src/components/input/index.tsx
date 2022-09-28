import React from 'react';
import './styles.scss';

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, name, onChange }: InputProps) => {
    return (
        <div className="input-container">
            <input type={type} placeholder={placeholder} name={name} onChange={onChange} />
        </div>
    );
}

export default Input;
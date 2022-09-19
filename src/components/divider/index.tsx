import './styles.scss';

interface DividerProps {
    type: string;
}

const Divider = (props: DividerProps) => {
    return (
        <div className={`divider__${props.type}`}></div>
    );
}

export default Divider;
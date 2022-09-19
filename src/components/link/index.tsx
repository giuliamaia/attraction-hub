import './styles.scss';

interface LinkProps {
    text: string;
    href: string;
}

const Link = (props: LinkProps) => {
    return (
        <a className="link" href={props.href}>{props.text}</a>
    );
}

export default Link;
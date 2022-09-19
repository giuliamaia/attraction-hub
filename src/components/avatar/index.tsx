import './styles.scss';

interface AvatarProps {
    username: string;
}

const Avatar = (props: AvatarProps) => {
    return (
        <div className='avatar'>
            <span className='avatar__username'>{props.username.toUpperCase()}</span>
            <div className='avatar__picture'>{props.username.toUpperCase()[0]}</div>
        </div>
    );
}

export default Avatar;
import './styles.scss';
import Logo1 from '../../assets/logo_1.png';
import Logo2 from '../../assets/logo_2.png';

interface LogoProps {
    type: string;
    width?: string;
}

const Logo = (props: LogoProps) => {
    return (
        <div className="logo" style={{width: props.width}}>
            <img src={props.type === 'colorful' ? Logo2 : Logo1} alt="Logo" />
        </div>
    );
}

export default Logo;


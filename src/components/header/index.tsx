import { useNavigate } from 'react-router-dom';
import Avatar from '../avatar';
import Button from '../button';
import Divider from '../divider';
import Logo from '../logo';
import './styles.scss';

interface HeaderProps {
    logged?: boolean;
}

const Header = (props: HeaderProps) => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <Logo type='default' width='150px' />
            {
                props.logged ?
                    <div className='header__buttons--logged'>
                        <Button className='transparent' text='MY LISTS' type='button' />
                        <Divider type='vertical' />
                        <Avatar username='GMAIA' />
                    </div> :
                    <div className='header__buttons'>
                        <Button className='transparent' text='LOGIN' type='button' onClick={() => navigate("/")} />
                        <Button className='primary' text='SIGN UP' type='button' onClick={() => navigate("/register")} />
                    </div>
            }
        </div>
    );
}

export default Header;
import Avatar from '../avatar';
import Button from '../button';
import Divider from '../divider';
import Logo from '../logo';
import './styles.scss';

interface HeaderProps {
    logged?: boolean;
}

const Header = (props: HeaderProps) => {
    return (
        <div className='header'>
            <Logo type='default' width='150px'/>
            {
                props.logged ? 
                <div className='header__buttons--logged'>
                    <Button type='transparent' text='MY LISTS'/>
                    <Divider type='vertical'/>
                    <Avatar username='GMAIA'/>
                </div> :
                <div className='header__buttons'>
                    <Button type='transparent' text='LOGIN'/>
                    <Button type='primary' text='SIGN UP'/>
                </div>
            }
        </div>
    );
}

export default Header;
import { useNavigate } from 'react-router-dom';
import Avatar from '../avatar';
import Button from '../button';
import Divider from '../divider';
import Logo from '../logo';
import './styles.scss';
import { signOut, User } from 'firebase/auth';
import { auth } from '../../utils/firebase/firebase-config';
import { UseUserStore } from '../../stores/userStore';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

interface HeaderProps {
    logged?: boolean;
}

const Header = (props: HeaderProps) => {
    const { setUser } = UseUserStore();
    const navigate = useNavigate();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <div className='header'>
            <Logo type='default' width='150px' />
            {
                props.logged ?
                    <div className='header__buttons--logged'>
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                        </ActionIcon>
                        <Button className='transparent' text='MY LISTS' type='button' onClick={() => navigate('/my-list')} />
                        <Divider type='vertical' />
                        {/* <Avatar username='GMAIA' /> */}
                        <Button className='transparent' text='LOGOUT' type='button' onClick={() => {
                            signOut(auth)
                                .then(() => {
                                    setUser({} as User);
                                    navigate("/");
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }} />
                    </div> :
                    <div className='header__buttons'>
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                        </ActionIcon>
                        <Button className='transparent' text='LOGIN' type='button' onClick={() => navigate("/")} />
                        <Button className='primary' text='SIGN UP' type='button' onClick={() => navigate("/register")} />
                    </div>
            }
        </div>
    );
}

export default Header;
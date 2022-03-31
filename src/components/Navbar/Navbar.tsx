import {useState} from 'react';
import {Header, Nav, Logo, Actions, Action, Image, Options, Option} from './Styles';
import {Link} from 'react-router-dom';
import Notifications from '../Notifications/Notifications';
import InputSearch from '../InputSearch/InputSearch';


// Icons Material UI
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Modal from '../Modal/Modal';

// Logo
import LogoInstagram from '../..//instagram-logo.jpg';

const Navbar = function() {

    const [activatedOptions, setActivatedOptions] = useState<boolean>(false);
    const [activatedNotifications, setActivatedNotifications] = useState<boolean>(false);
    const [activatedModal, setActivatedModal] = useState<boolean>(false);

    const handleActivateOptions = (): void => {
        setActivatedOptions(!activatedOptions);
        setActivatedNotifications(false);
    }
    const handleActivateNotifications = (): void => {
        setActivatedNotifications(!activatedNotifications);
        setActivatedOptions(false);
    }

    return(
        <Header>
            <Modal activated={activatedModal} setActivated={setActivatedModal}/>
            <Nav>
                <Logo to="/">
                    <img src={LogoInstagram} alt="Instagram" />
                </Logo>

                <InputSearch/>
                
                <Actions>
                    {/* Action Home */}
                    <Action>
                        <Link to="/">
                            <HomeOutlinedIcon/>
                        </Link>
                    </Action>
                    {/* Action Messenger */}
                    <Action>
                        <Link to="/">
                            <WhatsappOutlinedIcon/>
                        </Link>
                    </Action>
                    {/* Action add new post */}
                    <Action>
                        <button onClick={():void => setActivatedModal(true)}>
                            <AddBoxOutlinedIcon/>
                        </button>
                    </Action>
                    {/* Action explore publications */}
                    <Action>
                        <Link to="/">
                            <ExploreOutlinedIcon/>
                        </Link>
                    </Action>
                    {/* Action notifications */}
                    <Action onClick={handleActivateNotifications}>
                        <button>
                            <FavoriteBorderOutlinedIcon/>
                        </button>
                       <Notifications activated={activatedNotifications}/>
                    </Action>
                    {/* Action profile options */}
                    <Action onClick={handleActivateOptions}>
                        <Image src='https://i.imgur.com/pMdy4wq.jpg' alt="Irving Rodríguez" />
                        <Options activated={activatedOptions.toString()}>
                            <Option>
                                <AccountCircleOutlinedIcon/>
                                <p>Profile</p>
                            </Option>
                            <Option>
                                <BookmarkBorderOutlinedIcon/>
                                <p>Saved</p>
                            </Option>
                            <Option>
                                <SettingsOutlinedIcon/>
                                <p>Setting</p>
                            </Option>
                            <Option>
                                <ChangeCircleOutlinedIcon/>
                                <p>Change account</p>
                            </Option>
                            <Option>
                                <p>Salir</p>
                            </Option>
                        </Options>
                    </Action>
                </Actions>
            </Nav>
        </Header>
    );
}

export default Navbar;
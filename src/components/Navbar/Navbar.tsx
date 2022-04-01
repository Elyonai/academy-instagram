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
        <Header role="menubar">
            <Modal activated={activatedModal} setActivated={setActivatedModal}/>
            <Nav role="navigation">
                <Logo to="/" role="link" aria-label="logo">
                    <img src={LogoInstagram} alt="Instagram" role="img"/>
                </Logo>

                <InputSearch/>
                
                <Actions role="group" aria-label="menubar actions">
                    {/* Action Home */}
                    <Action role="menuitem">
                        <Link to="/" role="link" aria-label="link to home">
                            <HomeOutlinedIcon/>
                        </Link>
                    </Action>
                    {/* Action Messenger */}
                    <Action role="menuitem">
                        <Link to="/" role="link" aria-label="link to chat">
                            <WhatsappOutlinedIcon/>
                        </Link>
                    </Action>
                    {/* Action add new post */}
                    <Action role="menuitem">
                        <button onClick={():void => setActivatedModal(true)} role="button" aria-label="button open modal">
                            <AddBoxOutlinedIcon />
                        </button>
                    </Action>
                    {/* Action explore publications */}
                    <Action role="menuitem">
                        <Link to="/" role="link" aria-label="link to explore publications">
                            <ExploreOutlinedIcon/>
                        </Link>
                    </Action>
                    {/* Action notifications */}
                    <Action role="menuitem">
                        <button onClick={handleActivateNotifications} role="button" aria-label="button open notifications">
                            <FavoriteBorderOutlinedIcon />
                        </button>
                       <Notifications activated={activatedNotifications}/>
                    </Action>
                    {/* Action profile options */}
                    <Action onClick={handleActivateOptions} role="button" aria-label="button open user options">
                        <Image src='https://i.imgur.com/pMdy4wq.jpg' alt="Irving Rodríguez" role="img" />
                        <Options activated={activatedOptions.toString()} role="list" aria-label="list options user">
                            <Option role="listitem" aria-label="listitem profile">
                                <AccountCircleOutlinedIcon/>
                                <p>Profile</p>
                            </Option>
                            <Option role="listitem"  aria-label="listitem saved">
                                <BookmarkBorderOutlinedIcon/>
                                <p>Saved</p>
                            </Option>
                            <Option role="listitem" aria-label="listitem setting">
                                <SettingsOutlinedIcon/>
                                <p>Setting</p>
                            </Option>
                            <Option role="listitem" aria-label="listitem change account">
                                <ChangeCircleOutlinedIcon/>
                                <p>Change account</p>
                            </Option>
                            <Option role="listitem" aria-label="listitem sign out">
                                <p>Sign out</p>
                            </Option>
                        </Options>
                    </Action>
                </Actions>
            </Nav>
        </Header>
    );
}

export default Navbar;
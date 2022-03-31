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
                <Logo to="/" role="link" title="link-to-home">
                    <img src={LogoInstagram} alt="Instagram" role="img"/>
                </Logo>

                <InputSearch/>
                
                <Actions role="group" title="group-actions">
                    {/* Action Home */}
                    <Action role="menuitem">
                        <Link to="/" role="link" title="link-to-home-icon">
                            <HomeOutlinedIcon/>
                        </Link>
                    </Action>
                    {/* Action Messenger */}
                    <Action role="menuitem">
                        <Link to="/" role="link" title="link-to-chat">
                            <WhatsappOutlinedIcon/>
                        </Link>
                    </Action>
                    {/* Action add new post */}
                    <Action role="menuitem">
                        <button onClick={():void => setActivatedModal(true)} role="button" title="button-open-modal">
                            <AddBoxOutlinedIcon role="aria-hidden"/>
                        </button>
                    </Action>
                    {/* Action explore publications */}
                    <Action role="menuitem">
                        <Link to="/" role="link" title="link-to-explore-publications">
                            <ExploreOutlinedIcon/>
                        </Link>
                    </Action>
                    {/* Action notifications */}
                    <Action role="menuitem">
                        <button onClick={handleActivateNotifications} role="button" title="button-open-notifications">
                            <FavoriteBorderOutlinedIcon role="aria-hidden"/>
                        </button>
                       <Notifications activated={activatedNotifications}/>
                    </Action>
                    {/* Action profile options */}
                    <Action onClick={handleActivateOptions} role="button" title="button-open-options-user">
                        <Image src='https://i.imgur.com/pMdy4wq.jpg' alt="Irving Rodríguez" role="img" />
                        <Options activated={activatedOptions.toString()} role="list" title="list-options-user">
                            <Option role="listitem" title="listitem-profile">
                                <AccountCircleOutlinedIcon/>
                                <p>Profile</p>
                            </Option>
                            <Option role="listitem" title="listitem-saved">
                                <BookmarkBorderOutlinedIcon/>
                                <p>Saved</p>
                            </Option>
                            <Option role="listitem" title="listitem-setting">
                                <SettingsOutlinedIcon/>
                                <p>Setting</p>
                            </Option>
                            <Option role="listitem" title="listitem-change-account">
                                <ChangeCircleOutlinedIcon/>
                                <p>Change account</p>
                            </Option>
                            <Option role="listitem" title="listitem-sign-out">
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
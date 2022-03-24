import Button from '../Button/Button';
import {NotificationsContainer, Notification, NotificationImage, NotificationBody, Group} from './Styles';

type PropsNotifications = {
    activated: boolean;
}

const Notifications = function(props: PropsNotifications) {

    return(
        <NotificationsContainer activated={props.activated.toString()}>
        <h3>This month</h3>
        <Notification to="/">
            <Group>
                <NotificationImage src='https://i.imgur.com/pMdy4wq.jpg' alt="Irving"/> 
                <NotificationBody>
                    <p>
                        <strong>fulano3215</strong> like your photo <span>2 weeks</span>
                    </p>
                </NotificationBody>
                <Button>Follow</Button>
            </Group>
        </Notification>
    </NotificationsContainer>

    );
}

export default Notifications;
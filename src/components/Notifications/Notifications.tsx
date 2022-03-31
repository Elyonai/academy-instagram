import Button from '../Button/Button';
import {NotificationsContainer, Notification, NotificationImage, NotificationBody, Group} from './Styles';

type PropsNotifications = {
    activated: boolean;
}

const Notifications = function(props: PropsNotifications) {

    return(
        <NotificationsContainer activated={props.activated.toString()} role="list" title="list-notifications">
            <h3>This month</h3>
            <Notification to="/" role="listitem" title="listitem-notification-1">
                <Group role="group">
                    <NotificationImage src='https://i.imgur.com/pMdy4wq.jpg' alt="Irving" role="image"/> 
                    <NotificationBody>
                        <p>
                            <strong>fulano3215</strong> like your photo <span>2 weeks</span>
                        </p>
                    </NotificationBody>
                    <Button role="button" title="button-follow">Follow</Button>
                </Group>
            </Notification>
            <Notification to="/" role="listitem" title="listitem-notification-2">
                <Group role="group">
                    <NotificationImage src='https://i.imgur.com/pMdy4wq.jpg' alt="Irving" role="img"/> 
                    <NotificationBody>
                        <p>
                            <strong>fulano3215</strong> like your photo <span>2 weeks</span>
                        </p>
                    </NotificationBody>
                    <Button role="button" title="button-follow">Follow</Button>
                </Group>
            </Notification>
            <Notification to="/" role="listitem" title="listitem-notification-3">
                <Group>
                    <NotificationImage src='https://i.imgur.com/pMdy4wq.jpg' alt="Irving" role="img"/> 
                    <NotificationBody>
                        <p>
                            <strong>fulano3215</strong> like your photo <span>2 weeks</span>
                        </p>
                    </NotificationBody>
                    <Button role="button" title="button-follow">Follow</Button>
                </Group>
            </Notification>
        </NotificationsContainer>

    );
}

export default Notifications;
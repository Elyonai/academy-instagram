import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

// Notifications
export const NotificationsContainer = styled.ul`
    width: 480px;
    min-height: 100px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: #fff;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    overflow: auto;
    position: absolute;
    top: 40px;
    right: -10px;
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    h3 {
        font-size: 0.8125rem;
        padding: 12px 16px;
    }

    ${props => props.activated === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const Notification = styled(Link)`
    width: 100%;
    height: 60px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
`;

export const NotificationBody = styled.div`
    width: 300px;

    p{
        word-wrap: break-word;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const NotificationImage = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 100%;
`;
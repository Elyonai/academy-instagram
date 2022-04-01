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
    transition: var(--transition);
    right: -10px;
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;
    z-index: 9998;
    box-sizing: border-box;
    padding: 0;
    tex-align: left;

    h3 {
        font-size: 0.8125rem;
        padding: 12px 16px;
        text-align: left;
    }

    ${props => props.activated === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--color-gray-white);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--color-gray);
        border-radius: 80px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-blue);
    }
`;

export const Notification = styled(Link)`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    margin: 0;
    padding: 12px 16px;
    font-size: 14px;
    text-align: left;
`;

export const NotificationBody = styled.div`
    width: 300px;
    p{ word-wrap: break-word;}
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
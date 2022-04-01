import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

// Header
export const Header = styled.header`
    width: 100%;
    height: 60px;
    background: var(--color-white);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Nav
export const Nav = styled.nav`
    width: 100%;
    height: 100%;
    max-width: 975px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    vertical-align: baseline;
`;

// Logo
export const Logo = styled(Link)`
    width: 250px;
    height: 30px;
    
    img {
        width: 100px;
        height: 100%;
    }
`;

// Actions
export const Actions = styled.ul`
    display: flex;
    gap: 1.25rem; /* 20px */
    height: 24px;
`;

export const Action = styled.li`   
    button {background:transparent;}
    position: relative;

    &:first-child {
        svg {font-size: 30px;}
    }

    svg {font-size: 27px;
    
        &:hover {fill: var(--color-blue);}
    }

    &:.active {
        background:red;
    }
`;

export const Image = styled.img`
    width: 1.75rem; /* 24px */
    height: 1.75rem;
    border-radius: 100%;
    cursor: pointer;
    position: relative;
`;

// Options
export const Options = styled.ul`
    width: 230px;
    background: var(--color-white);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    position: absolute;
    top: 40px;
    right: -10px;
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 99;
    box-sizing: border-box;
    padding: 0;

    ${props => props.activated === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const Option = styled.li`
    width: 100%;
    height: 37px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 14px;
    
    p {padding: 0; margin: 0;}

    svg {
        font-size: 16px;
    }

    &:last-child {border-top: 1px solid var(--border-color);}

    &:hover {background: var(--color-gray-white);}
`;
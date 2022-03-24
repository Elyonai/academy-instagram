import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

// Input
export const ContainerInput = styled.div`
    width: 260px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    svg {
        font-size: 20px;
        fill: var(--font-color-gray);
    }

    svg.icon-search {
        position: absolute;
        left: 15px;
    }

    .icon-close {
        height: 100%;
        position: absolute;
        top: 0;
        right: 10px;
        transform: scale(0);
        transition: var(--transition);

        ${props => props.activated === 'true' && css` transform: scale(1); `}
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 15px 20px 15px 40px;
    background: var(--color-gray);
    border-radius: var(--radius);
    font-size: 0.9375rem; /* 15px */

    &::placeholder {color: var(--font-color-gray);}
`;

// Results
export const Results = styled.ul`
    width: 360px;
    height: 360px;
    background: var(--color-white);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    position: absolute;
    top: 48px;
    padding-top: 12px;
    overflow: auto;
    transition: var(--transition);
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;

    h4 {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: var(--font-color-gray);
        font-weight: 500;
    }

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
    
    ${props => props.activated === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;

    `}

`;

export const Result = styled(Link)`
    display: block;
    width: 100%;
    height: 60px;
    padding: 8px 16px;
    background: var(--color-white);
    position: relative;
    transition: var(--transition);
    animation: show 0.3s ease;
    cursor: pointer;
    
    @keyframes show {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(0);
        }
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const ResultBody = styled.div`
    width: 300px;

    strong, p {font-size: 0.8125rem;}

    strong {
        display: block;
        padding: 3px 0;
    }

    p{ word-wrap: break-word;}
`;

export const ResultImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`;

export const ButtonDelete = styled.button`
    width: 20px;
    height: 20px;
    position: absolute:
    right: 0;
    background: transparent;

    svg {
        fill: var(--font-color-gray);
        font-size: 20px;
    }
`;
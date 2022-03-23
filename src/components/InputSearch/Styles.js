import styled from 'styled-components';

// Input
export const ContainerInput = styled.div`
    width: 260px;
    height: 36px;
    display: flex;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        left: 15px;
        font-size: 20px;
        fill: var(--font-color-gray);
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
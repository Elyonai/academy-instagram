import styled,{css} from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--color-black-gradient);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    transition: var(--transition);
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;

    ${props => props.activated === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const Form = styled.form`
    width: 100%;    
    max-width: 450px;
    height: 450px;
    background: var(--color-white);
    border-radius: 10px;
`;

export const FormHeader = styled.div`
    width: 100%;
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    
    h2 {font-size: 15px;}
`;

export const FormBody = styled.div`
    width: 100%;
    height: 80%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    svg {font-size: 80px;}

    h2 {
        font-weight: 400;
        font-size: 20px;
    }
`;

export const ButtonClose = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    
    svg {
        fill: var(--color-white);
        font-size: 30px;
    }
`;
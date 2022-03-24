import {ButtonPrimary} from './Styles';

type Props = {
    children: React.ReactNode
}

const Button = function({children}: Props) {
    return(
        <ButtonPrimary>
            {children}
        </ButtonPrimary>
    );
}

export default Button;
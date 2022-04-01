import {ButtonPrimary} from './Styles';

type Props = {
    children: React.ReactNode,
    role: string,
    ariaLabel: string
}

const Button = function({children,role, ariaLabel}: Props) {
    return(
        <ButtonPrimary role={role} ariaLabel={ariaLabel}>
            {children}
        </ButtonPrimary>
    );
}

export default Button;
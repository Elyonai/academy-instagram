import {ButtonPrimary} from './Styles';

type Props = {
    children: React.ReactNode,
    role: string,
    title: string
}

const Button = function({children,role, title}: Props) {
    return(
        <ButtonPrimary role={role} title={title}>
            {children}
        </ButtonPrimary>
    );
}

export default Button;
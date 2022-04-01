import {Container, Form, FormHeader, FormBody, ButtonClose} from './Styles';
import Button from '../Button/Button';

// Icons Material UI
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type Props = {
    activated: boolean,
    setActivated: React.Dispatch<React.SetStateAction<boolean>>,
}

const Modal = function({activated, setActivated}: Props) {
    
    return(
        <Container activated={activated.toString()} role="tree" aria-label="modal create publication">
            <ButtonClose onClick={():void => setActivated(false)} role="button" aria-label="button close modal">
                <CloseOutlinedIcon/>
            </ButtonClose>
            <Form role="form" aria-label="form add publication">
                <FormHeader>
                    <h2>Create new publication</h2>
                </FormHeader>
                <FormBody>
                    <CollectionsOutlinedIcon/>
                    <h2>Drag photos and videos here </h2>
                    <Button role="button" ariaLabel="button select file">Select from computer</Button>
                </FormBody>
            </Form>
        </Container>

    );
}

export default Modal;
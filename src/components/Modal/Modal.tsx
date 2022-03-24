import {Container, Card, CardHeader, CardBody, ButtonClose} from './Styles';
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
        <Container activated={activated.toString()}>
            <ButtonClose onClick={():void => setActivated(false)}>
                <CloseOutlinedIcon/>
            </ButtonClose>
            <Card>
                <CardHeader>
                    <h2>Create new publication</h2>
                </CardHeader>
                <CardBody>
                    <CollectionsOutlinedIcon/>
                    <h2>Drag photos and videos here </h2>
                    <Button>Select from computer</Button>
                </CardBody>
            </Card>
        </Container>

    );
}

export default Modal;
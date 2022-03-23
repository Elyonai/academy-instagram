import {ContainerInput, Input} from './Styles';
import SearchIcon from '@mui/icons-material/Search';

const InputSearch = function() {
    return(
        <ContainerInput>
            <Input name="search" placeholder="Search" autoComplete="off"/>
            <SearchIcon/>
        </ContainerInput>

    );
}

export default InputSearch;
import {ContainerInput, Input, Results, Result, ResultBody, ResultImage, Group, ButtonDelete} from './Styles';
import {useState} from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// Icons Material UI
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const InputSearch = function() {

    const [activatedResults, setActivatedResults] = useState<boolean>(false);

    const handleSearch = (): void => {
        
    }

    return(
        <ContainerInput activated={activatedResults.toString()}>
            <Input name="search" placeholder="Search" autoComplete="off" onFocus={() => setActivatedResults(true)}  onBlur={() => setActivatedResults(false)}/>
            <SearchIcon className="icon-search"/>
            <Results activated={activatedResults.toString()}>
                <Result>
                    <Group>
                        <ResultImage src='https://i.imgur.com/pMdy4wq.jpg' alt="Irving" />
                        <ResultBody>
                            <strong>fulano3215</strong>
                            <span>Fulano Mengano</span>
                        </ResultBody>
                    <ButtonDelete>
                        <CloseOutlinedIcon/>
                    </ButtonDelete>
                    </Group>
                </Result>
            </Results>
            <button>
                <HighlightOffIcon className="icon-close"/>
            </button>
        </ContainerInput>

    );
}

export default InputSearch;
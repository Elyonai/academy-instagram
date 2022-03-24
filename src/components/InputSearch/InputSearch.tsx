import {ContainerInput, Input, Results, Result, ResultBody, ResultImage, Group, ButtonDelete} from './Styles';
import {useState} from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// Icons Material UI
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const InputSearch = function() {

    type InputElement = React.ChangeEventHandler<HTMLInputElement>;

    interface UserResult {
        id: number,
        name: string,
        description: string,
        picture: string
    }

    const [activatedResults, setActivatedResults] = useState<boolean>(false);
    const [resultsSearch, setResultsSearch] = useState<UserResult[]>([]);

    const handleSearch: InputElement = async (e) => {

        if(e.target.value !== '') {
            try {

                const request = await fetch('http://localhost:5000/users');
                const response: UserResult[] = await request.json();
    
                const results = response.filter((result: UserResult) => result.name.startsWith(e.target.value) === true);
    
                setResultsSearch(results);
                
    
            } catch(error) {
                console.log(error);
            }
        } else {
            setResultsSearch([]);
        }
        
    }

    return(
        <ContainerInput activated={activatedResults.toString()}>
            <Input name="search" placeholder="Search" autoComplete="off" onFocus={() => setActivatedResults(true)} onChange={handleSearch}/>
            <SearchIcon className="icon-search"/>
            <Results activated={activatedResults.toString()}>
                {resultsSearch && resultsSearch.length > 0 
                    ?   resultsSearch.map((result: UserResult) => (
                        <Result key={result.id} to={`/profile/${result.id}`} data-id>
                            <Group>
                                <ResultImage src={result.picture} alt={result.name} />
                                <ResultBody>
                                    <strong>{result.name}</strong>
                                    <span>{result.description}</span>
                                </ResultBody>
                            <ButtonDelete>
                                <CloseOutlinedIcon/>
                            </ButtonDelete>
                            </Group>
                        </Result>
                    ))
                    
                    : <h4>No results found</h4>
                }
            </Results>
            <button>
                <HighlightOffIcon className="icon-close" onClick={() => setActivatedResults(false)}/>
            </button>
        </ContainerInput>

    );
}

export default InputSearch;
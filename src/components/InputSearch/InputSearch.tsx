import {ContainerInput, Input, Results, Result, ResultBody, ResultImage, Group, ButtonDelete} from './Styles';
import {useState, useRef} from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Loader from './Loader';
import axios from 'axios';

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
    const [loanding, setLoanding] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null!);

    const getResults = async (search: string) => {
        
        try {

            setLoanding(true);

            const request = await axios.get('http://localhost:5000/users');
            
            const results = request.data.filter((result: UserResult) => result.name.toLowerCase().startsWith(search) === true);

            return results;

        } catch(error) {
            console.log(error);
        
        } finally {
            setLoanding(false);
        }
    }

    const handleSearch: InputElement = async (e) => {

        if(e.target.value !== '' && e.target.value.length > 0) {

            let search = e.target.value.toLowerCase();

            let results = getResults(search);
            
            results.then(response => {
                setResultsSearch(response);
            } );
       
        } else {
            setResultsSearch([]);
        }
        
    }

    const handleResetInput = () => {
        setActivatedResults(false);
        setResultsSearch([]);
        inputRef.current.value = '';
    }

    return(
        <ContainerInput activated={activatedResults.toString()}>
            <Input name="search" placeholder="Search" autoComplete="off" ref={inputRef} onFocus={() => setActivatedResults(true)} onChange={handleSearch}/>
            <SearchIcon className="icon-search"/>
            <Results activated={activatedResults.toString()} role="list" aria-label="list results">
                {loanding && <Loader />}
                
                {!loanding && resultsSearch && resultsSearch.length > 0 
                    ?   resultsSearch.map((result: UserResult) => (
                        <Result key={result.id} to={`/profile/${result.id}`} data-id role="listitem" aria-label="listitem result">
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
                    
                    : !loanding && <h4>No results found</h4>
                }
            </Results>
            <button onClick={handleResetInput} role="button" aria-label="button close results">
                <HighlightOffIcon className="icon-close" onClick={() => setActivatedResults(false)}/>
            </button>
        </ContainerInput>

    );
}

export default InputSearch;
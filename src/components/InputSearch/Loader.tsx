import {ContainerLoader, Preloader} from './Styles';

const Loader = function() {

    return(
        <ContainerLoader role="progressbar">
            <Preloader/>
        </ContainerLoader>
    );

}

export default Loader;
import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

// Queries
// get - get* Sirven para obtener Nodeos sincronos (Que ya existen o deberían existir en el dom cuando carda la aplicación)
// find - find* Sirve para obtener Nodeos asincronos (Que solo existen dependiendo de la respuesta de evento por ejemplo un loader o el mensaje de error al no encontrar un resultado de una busqueda)
// query - query* Sirve para determinar si un Nodeo esta o no en la aplicación

let component: any;

beforeEach(() => {
    render(<Navbar/>);
});

describe('Render the interface component', () => {
    
    test('Is in the document the Nodes', () => {
        
        const title = screen.getByText(/Search some user with Json Server/i);
        const subtitle = screen.getByText(/his application is to practice react with typescript/i);
        const inputSearch = screen.getByPlaceholderText(/Search/i);
        
        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
        expect(inputSearch).toBeInTheDocument();
    });
    
    test('Container results is hidden when initialize the application ', () => {
        
        const results = screen.getByText(/No found results/i);

        expect(results.parentNode).toBeInTheDocument();
        expect(results.parentNode).toHaveStyle('opacity: 0');

    });

});

describe('Handle events', () => {

    test('Should to show container results when user do focus in the input', () => {
        const inputSearch = screen.getByPlaceholderText(/Search/i);
        const results = screen.getByText(/No found results/i);
        const buttonCloseResults = screen.getByRole('button', {name: /button-close-results/});
        
        fireEvent.focus(inputSearch);

        expect(results.parentNode).toHaveStyle('opacity: 1');
        expect(buttonCloseResults).toHaveStyle('transform: scale(1)');

    });

    test('Should to hidden container results and format the input value when user do click in the icon button', () => {

        const buttonCloseResults = screen.getByRole('button', {name: /button-close-results/});
        const inputSearch = screen.getByPlaceholderText(/Search/i);
        const results = screen.getByText('No found results');

        fireEvent.click(buttonCloseResults);

        expect(results.parentNode).toHaveStyle('opacity: 0');
        expect(buttonCloseResults).toHaveStyle('transform: scale(0)');
        expect(inputSearch).toHaveValue('');
    });

    test('Should to show loader when the search is loanding', () => {
        
    });


});
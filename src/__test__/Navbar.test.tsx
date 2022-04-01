import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar/Navbar';
import {render, screen, fireEvent, cleanup, act} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

// Queries
// get - get* Sirven para obtener Nodeos sincronos (Que ya existen o deberían existir en el dom cuando carda la aplicación)
// find - find* Sirve para obtener Nodeos asincronos (Que solo existen dependiendo de la respuesta de evento por ejemplo un loader o el mensaje de error al no encontrar un resultado de una busqueda)
// query - query* Sirve para determinar si un Nodeo esta o no en la aplicación

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
});

afterEach(cleanup);

describe('<Navbar> - Render the elements of the component in the interface', () => {
    
    test('Are in the document the elements', () => {
        
        const menuBar = screen.getByRole('menubar');
        const navigation = screen.getByRole('navigation');
        const logoImage = screen.getByRole('img', {name: 'Instagram'});
        const inputSearch = screen.getByPlaceholderText(/Search/i);
        const groupActions = screen.getByRole('group', {name: 'menubar actions'});

        expect(menuBar).toBeInTheDocument();
        expect(navigation).toBeInTheDocument();
        expect(logoImage).toBeInTheDocument();
        expect(inputSearch).toBeInTheDocument();
        expect(groupActions).toBeInTheDocument();

    });

    test('Elements are hidden when you start the application', () => {

        const modal: any = screen.getByText(/Create new publication/i).parentNode.parentNode.parentNode;
        const listResults: any = screen.getByText(/No results found/i).parentNode;
        const optionsUser: any = screen.getByText(/Profile/i).parentNode.parentNode;

        expect(modal).toHaveStyle('visibility: hidden');
        expect(listResults).toHaveStyle('visibility: hidden');
        expect(optionsUser).toHaveStyle('visibility: hidden');

    });

});

describe('<Navbar> - Testing element event handlers ', () => {

    test('Should to show the modal when user do click in the button create new publication', () => {
        
        const modal: any = screen.getByText(/Create new publication/i).parentNode.parentNode.parentNode;
        const buttonOpenModal = screen.getByRole('button', {name: 'button open modal'});

        fireEvent.click(buttonOpenModal);

        expect(modal).toHaveStyle('visibility: visible');
    });

    test('Should to hide the modal when the user to click in the button close modal', () => {
        
        const modal: any = screen.getByText(/Create new publication/i).parentNode.parentNode.parentNode;
        const buttonOpenModal = screen.getByRole('button', {name: 'button open modal'});
        const buttonCloseModal = modal.firstChild;

        fireEvent.click(buttonOpenModal);
        
        fireEvent.click(buttonCloseModal);
        
        expect(modal).toHaveStyle('visibility: hidden');

    });

    test('Should to show and hide the options when the user to click in the his picture', () => {
        
        const buttonOpenOptionsUser = screen.getByRole('button', {name: 'button open user options'});
        const optionsUser = buttonOpenOptionsUser.childNodes[1];

        // User to click in the button a first time
        fireEvent.click(buttonOpenOptionsUser);
        
        expect(optionsUser).toHaveStyle('visibility: visible');
        
        // User to click in the button a second time
        fireEvent.click(buttonOpenOptionsUser);
        
        expect(optionsUser).toHaveStyle('visibility: hidden');
        
    });

    test('Should to show and hide the notifications when the user to click in the button with icon heart', () => {
        
        const buttonOpenNotifications = screen.getByRole('button', {name: 'button open notifications'});
        const notifications: any = buttonOpenNotifications.nextSibling;

         // User to click in the button a first time
         fireEvent.click(buttonOpenNotifications);
        
         expect(notifications).toHaveStyle('visibility: visible');
         
         // User to click in the button a second time
         fireEvent.click(buttonOpenNotifications);
         
         expect(notifications).toHaveStyle('visibility: hidden');

    });

    test('Should to show results and button close when user do focus in the input search', () => {

        const inputSearch = screen.getByPlaceholderText(/Search/i);
        const results: any = screen.getByText(/No results found/i).parentNode;
        const buttonCloseResults = screen.getByRole('button', {name: 'button close results'});

        fireEvent.focus(inputSearch);

        // expect(buttonCloseResults).toHaveStyle('transform: scale(1)');
        expect(results).toHaveStyle('visibility: visible');

    });

    test('Should to change value of the input search when the user write his search', () => {
        
        const inputSearch = screen.getByPlaceholderText(/Search/i);

        fireEvent.change(inputSearch, {target: {value: 'hector'}});

        expect(inputSearch).toHaveValue('hector');
        
    });

    test('Should to hide results and reset input search value when the user do click in the button close', () => {

        const inputSearch = screen.getByPlaceholderText(/Search/i);
        const results: any = screen.getByText(/No results found/i).parentNode;
        const buttonCloseResults = screen.getByRole('button', {name: 'button close results'});

        fireEvent.focus(inputSearch);
        fireEvent.change(inputSearch, {target: {value: 'a'}});

        fireEvent.click(buttonCloseResults);

        expect(results).toHaveStyle('visibility: hidden');
        expect(inputSearch).toHaveValue('');

    });

    test('Should return a result in especific and show it', async () => {

        const inputSearch = screen.getByPlaceholderText(/Search/i);

        const expectedResult = {
            data: [{
                description: "Viajar por el mundo ✈️",
                id: 6,
                name: "Hector Rivera",
                picture: "https://i.imgur.com/skiUbTW.jpg"
            }]
        };

        mockedAxios.get.mockResolvedValueOnce(expectedResult);
        fireEvent.change(inputSearch, {target: {value: 'h'}});
   
        const resultUser: any = await screen.findByText(/Hector/i);
        expect(resultUser).toBeInTheDocument();
        
    });

    test('Should to return all results of the search', async () => {

        const inputSearch = screen.getByPlaceholderText(/Search/i);

        const expectedResult = {
            data: [{
                id: 2,
                name: "Angela Herrera",
                description: "Amante de los animales",
                picture: "https://i.imgur.com/2Q3TIBl.jpg"
            },
      
            {
                id: 3,
                name: "Andrea Hidalgo",
                description: "Diseñadora de moda",
                picture: "https://i.imgur.com/RiX2Oe9.jpg"
            },
      
            {
                id: 4,
                name: "Arturo Romero",
                description: "Fotografo 📷",
                picture: "https://i.imgur.com/jJloOMP.jpg"
            },]
        };

        mockedAxios.get.mockResolvedValueOnce(expectedResult);
        fireEvent.change(inputSearch, {target: {value: 'a'}});
    
        const resultUser: any = await screen.findByText(/Arturo/i);
        
        expect(resultUser).toBeInTheDocument();
    });

    test('Should to show the message info when dont find results of the search', async () => {

        const inputSearch = screen.getByPlaceholderText(/Search/i);

        const expectedResult = {
            data: [{
                description: "Viajar por el mundo ✈️",
                id: 6,
                name: "Hector Rivera",
                picture: "https://i.imgur.com/skiUbTW.jpg"
            }]
        };
    
        const messageInfo = await screen.findByText(/No results found/i);
        
        expect(messageInfo).toBeInTheDocument();
        
    });

});
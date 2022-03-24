import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Stories from './stories';

const Router = function() {
    return(
        <BrowserRouter>
            <Navbar/>
            <Stories/>
            <Routes>
                <Route path="/" element={<h2>Home</h2>} />
                <Route path="/profile" element={<h2>Profile</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
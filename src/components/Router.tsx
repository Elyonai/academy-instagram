import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Router = function() {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<h2>Home</h2>} />
                <Route path="/profile" element={<h2>Profile</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './Pages/PageRoutes';

import NavbarMain from './Components/NavbarMain';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavbarMain></NavbarMain>
                <PageRoutes></PageRoutes>
            </BrowserRouter>
        </>
    );
}

export default App;

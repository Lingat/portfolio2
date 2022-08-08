import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';

/* TODO WRITE COMMENTS */
function PageRoutes(props) {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home></Home>}></Route>
                <Route
                    exact
                    path='/portfolio'
                    element={<Portfolio></Portfolio>}
                ></Route>
                <Route
                    exact
                    path='/contact'
                    element={<Contact></Contact>}
                ></Route>
                <Route exact path='/about' element={<About></About>}></Route>
                <Route
                    path='*'
                    element={<div>Oh no! Page not found! </div>}
                ></Route>
            </Routes>
        </div>
    );
}

PageRoutes.propTypes = {};

export default PageRoutes;

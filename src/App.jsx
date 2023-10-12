import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarMain from '../Components/Navbar/NavbarMain';
import SignIn from "../Components/Signin/SignIn";
import SignUp from "../Components/Signin/SignUp";



const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<NavbarMain />} >
                    <Route index path='signin' element={<SignIn />} />
                    <Route index path='signup' element={<SignUp />} />
                </Route>
            </Routes>

        </div>
    )
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../Components/Signin/SignUp';
import SignIn from '../Components/Signin/SignIn';



const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />

            </Routes>

        </div>
    )
}

export default App

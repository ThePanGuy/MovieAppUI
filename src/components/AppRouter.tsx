import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./AutoContext";


const AppRouter: React.FunctionComponent = () => {

    return (
        <AuthProvider>
            <BrowserRouter>

            </BrowserRouter>
        </AuthProvider>
    );
};

export default AppRouter;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/error_pages/ErrorPage";
import Home from "./components/Home";
import {AuthProvider} from "./components/AuthContext";
import {SignUpPage} from "./components/login_pages/SignUpPage";
import {NoAccessPage} from "./components/error_pages/NoAccessPage";
import LoginPage from "./components/login_pages/LoginPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage/>
        },
        {
            path: '/login',
            element: <LoginPage/>
        },
        {
            path: "/sign-up",
            element: <SignUpPage/>
        },
        {
            path: "/error-no-access",
            element: <NoAccessPage/>
        }
    ])
;

root.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

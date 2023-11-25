import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import {AuthProvider} from "./components/AutoContext";

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
            path: "/movies",
            element: <App/>
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

import React, {createContext, ReactNode, useContext, useState} from 'react';
import {login, refreshToken} from "../operations/authOperation";
import * as async_hooks from "async_hooks";

interface AuthContextProps {
    access_token: string | null;
    login: (username: string, password: string) => void;
    refresh_token: () => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [access_token, setAccess_token] = useState(localStorage.getItem('token') || null);
    const [isLoading, setIsLoading] = useState(false);


    const loginHandler = async (username: string, password: string) => {
        try {
            setIsLoading(true);
            const data = await login(username, password);
            setAccess_token(data.access_token);
            localStorage.setItem('access_token', data.access_token);
        } catch (error) {
            console.error('Login error:', error);
            //todo: add proper error handling
        } finally {
            setIsLoading(false);
        }
    };

    const refreshTokenHandler = async () => {
        try {
            setIsLoading(true);
            const data = await refreshToken(localStorage.getItem('refreshToken'));
            setAccess_token(data.access_token);
            localStorage.setItem('access_token', data.access_token);
        } catch (error) {
            console.error('Token refresh error:', error);
            //todo: add proper error handling
        } finally {
            setIsLoading(false);
        }
    };

    const logoutHandler = () => {
        setAccess_token(null);
        localStorage.removeItem('access_token');
    };

    return (
        <AuthContext.Provider
            value={{
                access_token,
                login: loginHandler,
                refresh_token: refreshTokenHandler,
                logout: logoutHandler,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
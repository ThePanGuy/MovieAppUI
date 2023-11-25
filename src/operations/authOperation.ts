import {Constants} from "../utilities/constants";

export const login = async (username: string, password: string) => {
    const response = await fetch(`${Constants.getApiUrl()}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    });
    if (!response.ok) {
        throw new Error('Login failed');
    }

    return await response.json();
};

export const loginHandler = async (username: string, password: string) => {
    try {
        const data = await login(username, password);
        // setToken(data.token);
        localStorage.setItem('access_token', data.access_token);
    } catch (error) {
        console.error('Login error:', error);
    }
};


export const refreshToken = async (refreshToken: string | null) => {
    const response = await fetch(`${Constants.getApiUrl()}/refresh-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
        throw new Error('Token refresh failed');
    }

    return await response.json();
};
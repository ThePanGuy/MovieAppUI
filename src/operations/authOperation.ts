import {Constants} from "../utilities/constants";
import {post} from "../utilities/fetch";

export const login = async (username: string, password: string) => {
    const response = await fetch(`${Constants.getApiUrl()}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password}),
    });
    if (!response.ok) {
        throw new Error('Login failed');
    }

    return await response.json();
};


export const register = async (username: string, password: string) => {
    debugger
    try {
        const response = await post('/user/save', {username, password});
        return response.data;
    } catch (error) {
        throw new Error('Registration failed');
    }
}

export const refreshToken = async (refreshToken: string | null) => {
    const response = await fetch(`${Constants.getApiUrl()}/refresh-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({refreshToken}),
    });

    if (!response.ok) {
        throw new Error('Token refresh failed');
    }

    return await response.json();
};
import {Constants} from "./constants";

interface CustomResponse {
    status: number,
    ok: boolean,
    json: { message: String }
}

function getAuthToken(): string | null {
    return localStorage.getItem('access_token');
}

export function get<T>(uri: string): Promise<T | any> {
    return new Promise((resolve, reject) => fetch(Constants.getApiUrl() + uri, headers('GET'))
        .then(parseResponse)
        .then((response: CustomResponse) => {
            if (response.ok) {
                return resolve(response.json)
            }
            // extract the error from the servers json
            return reject(response.json.message);
        })
        .catch(error => reject(networkErrorResponse(error))))
}

export async function post<T>(uri: string, data: any): Promise<T | any> {
    return new Promise((resolve, reject) => fetch(Constants.getApiUrl() + uri, headers('POST', JSON.stringify(data)))
        .then(parseResponse)
        .then((response: CustomResponse) => {
            if (response.ok) {
                return resolve(response.json);
            }
            // extract the error from the server's json
            return reject(response.json.message);
        }).catch((error) => reject(networkErrorResponse(error))))

}

function headers(method: string, data?: any): RequestInit {
    return {
        body: data, // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, same-origin, *omit
        headers: {
            'content-type': 'application/json',
            Authorization: getAuthToken() ? `Bearer ${getAuthToken()}` : ''
        },
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'client', // *client, no-referrer,
    }
}

function parseResponse(response: Response): Promise<CustomResponse> {
    return new Promise((resolve, reject) => {
        response.json()
            .then((json: any) => {
                if (response.status === 403) {
                    document.location.href = '/error-no-access'
                } else if (response.status === 404) {
                    document.location.href = '/error-not-found'
                } else if (response.status === 401) {
                    if (!(window.location.href.indexOf("login") > -1)) {
                        document.location.href = '/'
                    }
                } else if (response.status === 426) {
                    resolve({
                        status: response.status,
                        ok: false,
                        json: {message: "There was an issue with the current request. It seems entity is locked by another user"},
                    })
                } else if (response.status === 500) {
                    resolve({
                        status: response.status,
                        ok: false,
                        json: {message: "There is an issue connecting to the services. Please refresh or contact support"},
                    })
                }
                resolve({
                    status: response.status,
                    ok: response.ok,
                    json: json,
                })
            }).catch(error => reject(error));
    });
}

const networkErrorResponse = (error: any) => {
    return {
        status: error.status,
        ok: false,
        json: {message: error.message}
    }
}
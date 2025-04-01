import axios from 'axios';
import {goToRoute} from '../router';

// We gebruiken een "baseURL" zodat we niet overal /api voor hoeven te zetten
const baseURL = '/api';

const http = axios.create({
    baseURL,
    headers: {
        // Met deze header geef je aan welk soort content je verwacht terug te krijgen van de server.
        Accept: 'application/json',
        // Deze header geeft aan in welk formaat de body van het verzoek is verzonden naar de server.
        'Content-Type': 'application/json',
    },
});

http.interceptors.response.use(
    response => response,
    error => {
        const status = error.response ? error.response.status : null;
        if (status === 401) {
            alert(error.response.data.message);
            goToRoute('login');
        }

        return Promise.reject(error);
    },
);

/**
 * send a get request to the given endpoint
 */
export const getRequest = (endpoint: string) => http.get(endpoint);

/**
 * send a post request to the given endpoint with the given data
 */
export const postRequest = (endpoint: string, data: any) => http.post(endpoint, data);

export const updateRequest = (endpoint: string, data: any) => http.put(endpoint, data);

export const deleteRequest = (endpoint: string) => http.delete(endpoint);

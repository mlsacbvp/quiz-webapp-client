// This is for making WEB API Calls

import axios from 'axios';

export const API_CLIENT = {
    get(URL){
        const promise = axios.get(URL);
        return promise;
    },
    post(URL, data){
        const promise = axios.post(URL, data);
        return promise;
    }
}
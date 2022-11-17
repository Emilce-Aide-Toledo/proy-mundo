import axios from "axios";

/**
 * Login Method to ReqRes endpoint
 * @params {string} email
 * @params {string} password
 */

export const login = (email, password) =>{

    let body = {
        email: email,
        password: password
    }

    //Returns the response whit a Promise 
    return axios.post('https://reqres.in/api/login', body)
}
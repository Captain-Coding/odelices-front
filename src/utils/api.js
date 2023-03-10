import axios from "axios"

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export const removeToken = function () {
    return localStorage.removeItem('token')
}

export const setToken = function (token) {
    return localStorage.setItem('token', token)
}

export const getToken = function () {
    return localStorage.getItem('token')
}

export const getTokenData = function () {
    const token = getToken()
    if (token)
        return parseJwt(token)
}


export const getAPI = function () {
    const token = getToken()
    const headers = {}

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    return axios.create({
        baseURL: 'https://odelicesback-development.up.railway.app/api',
        headers
    })

}

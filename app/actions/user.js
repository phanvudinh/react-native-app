import axios from 'axios'

export const GET_ALL_USER = "GET_ALL_USER"
export const GET_USER = "GET_USER"
export const UPDATE_USER = "UPDATE_USER"
export const DELETE_USER = "DELETE_USER"
const URL = "http://localhost:8080"

export const getAllUser = (dispatch) => {
    axios.get("http://192.168.78.9:8080/user")
    .then((response) => {
        console.log('data', response)
        dispatch({
            type: GET_ALL_USER,
            users: response.data
        })
    }).catch((error) => {
        console.log(Object.assign({},error))
    })
};
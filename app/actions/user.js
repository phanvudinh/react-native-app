import axios from 'axios'

export const GET_ALL_USER = "GET_ALL_USER"
export const GET_USER = "GET_USER"
export const UPDATE_USER = "UPDATE_USER"
export const DELETE_USER = "DELETE_USER"
const URL = "http://192.168.78.9:8080"

export const getAllUser = (dispatch) => {
    axios.get(`${URL}/user`)
    .then((response) => {
        dispatch({
            type: GET_ALL_USER,
            users: response.data
        })
    }).catch((error) => {
        console.log(Object.assign({},error))
    })
};

export const deleteUserById = (dispatch, id) => {
    axios.delete(`${URL}/user/${id}`)
    .then((response) => {
        dispatch({
            type: DELETE_USER,
            userId : id
        })
    }).catch((error) => {
        console.log(Object.assign({},error))
    })
};
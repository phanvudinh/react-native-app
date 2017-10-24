import { GET_ALL_USER } from '../actions/user';

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USER:
            return [
                ...action.users
            ] 
            break;
        default:
            return state;
    }
}
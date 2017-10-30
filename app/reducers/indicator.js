import { SHOW_INDICATOR, HIDE_INDICATOR } from '../actions/user';

const initialState = false

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_INDICATOR: return true 

        case HIDE_INDICATOR: return false
        
        default:
            return state;
    }
}
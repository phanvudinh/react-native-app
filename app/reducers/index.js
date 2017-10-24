import { combineReducers } from 'redux';

import main from './main';
import nav from './nav';
import user from './user';

export default combineReducers({
    main,
    nav,
    user
})
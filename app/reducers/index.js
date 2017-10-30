import { combineReducers } from 'redux';

import main from './main';
import nav from './nav';
import user from './user';
import indicator from './indicator';

export default combineReducers({
    main,
    nav,
    user,
    indicator
})
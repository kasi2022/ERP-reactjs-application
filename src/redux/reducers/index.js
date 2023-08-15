import { combineReducers } from 'redux';
import users from './users/users';

const rootReducer = combineReducers({
    users: users
});

export default rootReducer; 


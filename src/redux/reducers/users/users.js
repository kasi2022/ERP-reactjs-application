import * as type from '../../constants/userstypes';

const initialData={
    usersListData:[],
    userListLoading : false,
    userListError: null
}

export default function users(state = initialData, action){
    switch(action.type){
        case type.FETCH_USER:
            return{
                ...state, 
                userListLoading: true
            }
        case type.FETCH_USER_SUCCESS:
            return{
                ...state,
                userListLoading: false,
                usersListData: action.users
            }
        case type.FETCH_USER_FAILED:
            return{
                ...state,
                userListLoading: false,
                userListError: action.errorInUsers
            }
        default :
            return state; 
    }


}
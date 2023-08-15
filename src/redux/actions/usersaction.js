import * as type from '../constants/userstypes';

export const fetchingUsersList =()=>{
    return(
        {
            type: type.FETCH_USER
        }
    )
}
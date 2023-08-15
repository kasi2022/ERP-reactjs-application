import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingUsersList } from "../../redux/actions/usersaction";
import UsersCard from "../ReusableComponent/UsersCard/UsersCard";

export default function User(){
    const { userListLoading, usersListData, userListError} = useSelector(state=> state.users);
    const dispatch = useDispatch();

    console.log('user', usersListData);
    useEffect(()=>{
        dispatch(fetchingUsersList());
    }, [dispatch])
    
    if(userListLoading){
        return(
            <h1>LOADING....</h1>
        )
    }
    if(userListError){
        return(
            <h1>Sorry Somethingwent wrong ::{userListError}</h1>
        )
    }
    return(
        <div className="mt-user">
            <h1>User Content</h1>
            {
                usersListData?.map((userData, index)=>(
                    <div key={userData?.id +index}>
                        <UsersCard 
                            name={userData?.name}
                            userName={userData?.username}
                            email={userData?.email}
                        />
                    </div>
                ))
            }
        </div>
    )
}
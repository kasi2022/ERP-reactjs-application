import React from "react";

const UsersCard =({name, userName, email})=>{
    return(
        <div className="mt-usersCard">
            <div>
                {name}
                <span>{userName}:{email}</span>
            </div>
        </div>
    )
}
export default UsersCard;
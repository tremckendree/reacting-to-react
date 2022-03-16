import React from "react";

const UserProfile = (props) => {
    return (
        <>
        <h1>My favorite ninja turtle is {props.name}and he always yells {props.phrase}}</h1>
        </>
    )
}
export default UserProfile;
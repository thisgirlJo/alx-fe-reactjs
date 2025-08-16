import React from 'react';
import UserContext from './UserContent';

function UserDetails() {
    const userData = useContext(UserContext);

    return (
        <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;
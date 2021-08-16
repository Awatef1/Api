import React from 'react';
import UserList from '../Component/UserList';
export const Home = ({users,loadUsers}) => {
    return (
        <div>
            <UserList users={users} loadUsers={loadUsers}/>
            
        </div>
    )
}
export default Home;
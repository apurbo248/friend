import React, { useEffect, useState } from 'react';
import SelectUser from '../SelectUser/SelectUser';
import './UserPage.css';
import userData from '../UserData/user.json';
import UserInfo from '../UserInfo/UserInfo';
const UserPage = () => {
    
    const [users, setUsers] = useState([]);
   const [selectUser, setSelectUser] = useState([]);

   const btn=(user)=>{
     console.log("clicked",user);
     setSelectUser([...selectUser,user])
    
   }

    useEffect(()=>{
    setUsers(userData);
   },[]);
  return (
     <div className="userpage">
         <div className="userpage-container">
         {
         users.map(user =><UserInfo
             userinfo = {user} addUser = {btn} key={user.id}>   
             </UserInfo>) 
         }
         </div>
         <div className="usercartcontainer">  
         <SelectUser selectedUser ={selectUser}> </SelectUser>
         </div>
    </div>
   );
};

export default UserPage;
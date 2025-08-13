import { useState,useEffect } from "react";
let Users=()=>{
const [users,setUser] =useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUser(data))},[])



    return(
        
<>
<h2>Users List</h2>
<div>
{
 
 <table>
        <tr>
            <th>
                id
            </th>
            <th>Name</th>
            <th>User Name</th>
        </tr>
        {users.map((users)=>(
            <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.username}</td>
            </tr>
            
        ))}
    </table>
     
   
}
</div>
</>)
    
}
export default Users


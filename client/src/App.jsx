import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

function App() {
 const [users, setUsers] = useState([]);
 const [filteredUsers, setfilteredUsers] = useState([]);

   const getAllUsers = async () => {
    await axios.get("http://localhost:8000/users").then
    ((res)=> {
      console.log(res.data);
      setUsers(res.data); // to display all the users when the broswer loaded
      setfilteredUsers(res.data); // this will show when the user enter the data in serach filed
    });
  
   }
   
 useEffect(() => {
    getAllUsers();
 }, []);


 // Search function
const handleSearchChange = (e) => {
  //           kanimozhi oviya
       const searchText = e.target.value.toLowerCase();
       //   kanimozhi oviya
     const filteredUsers = users.filter((user)=>user.name.
     toLowerCase().includes(searchText) || user.city.
     toLowerCase().includes(searchText));
     setfilteredUsers(filteredUsers);
};

    
  return (
    <>
      <div className="container">
        <h3>Crud Project with Reactjs and Node as Backend</h3>
        <div className="input-search">
          <input type="search" placeholder="search text here" onChange={handleSearchChange} />
          <button className="btn green" >Add New User</button>
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredUsers && filteredUsers.map((user, index) => {
                  return (
                <tr key={user.id} >
               
                <td>{index + 1}</td>
              
                <td>{user.name}</td>
            
                <td>{user.age}</td>
                
                <td>{user.city}</td>
                <td>
                  <button className="btn green" >Edit</button>
                </td>
                <td>
                  <button className="btn red" >Delete</button>
                </td>
              </tr>
                  )
                })
              }
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

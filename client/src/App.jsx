import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

function App() {
 const [users, setUsers] = useState([]);
 const [filteredUsers, setfilteredUsers] = useState([]);
 const [isFormOpen, setIsFormOpen] = useState(false);
 const [userData, setUserData] = useState({name:"", age: "", city: ""});


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

// delete function

const handleDelete = async (id) => {
     const isConfirmed = window.confirm("Are you sure want to delete this user")
     if(isConfirmed) {
       await axios.delete(`http://localhost:8000/users/${id}`).then((res) => {
       setUsers(res.data); // to display all the users when the broswer loaded
      setfilteredUsers(res.data); // this will show when the user enter the data in serach filed
     })
     }
} 


// Add User details 
const handleAddRecord = () => {
    setUserData({name:"", age: "", city: ""});
    setIsFormOpen(true);

}

// close form 

const closeForm = () => {
  setIsFormOpen(false);
  getAllUsers(); // 
}


// handleData


const handleData = (e) => {
   setUserData({...userData, [e.target.name] : e.target.value})
}

// handleUpdateData

const handleUpdateData = (user) => {
  setUserData(user);
   setIsFormOpen(true);
}


const handleSubmit = async (e) => {
  e.preventDefault();

  console.log(userData); // CHECK THIS FIRST

  try {
    const res = await axios.post("http://localhost:8000/users", userData);
     alert("new user added succecfully"); 
    console.log(res.data);
    closeForm(); // close the form after send the data
  } catch (error) {
    console.log(error);
  }
};


  return (
    <>
      <div className="container">
        <h3>Crud Project with Reactjs and Node as Backend</h3>
        <div className="input-search">
          <input type="search" placeholder="search text here" onChange={handleSearchChange} />
          <button className="btn green" onClick={handleAddRecord}  >Add New User</button>
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
                  <button className="btn green" onClick={()=>handleUpdateData(user)} >Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user.id)} className="btn red" >Delete</button>
                </td>
              </tr>
                  )
                })
              }
             
            </tbody>
          </table>
          {isFormOpen && (
               <div className="form" >
                <div className="form-content" >
                  <span className="close" onClick={closeForm}>&times;</span>
                  <h2>User Record</h2> 
                  <div className="input-group">
                    <label htmlFor="name">Full name</label>
                    <input type="text" value={userData.name} onChange={handleData} name="name" id="name" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" value={userData.age} onChange={handleData} name="age" id="age" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="city">City</label>
                    <input type="text"  value={userData.city} onChange={handleData} name="city" id="city" />
                  </div>
                  <button type="button" className="btn green" onClick={handleSubmit} >Add user</button>
                </div>
               </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

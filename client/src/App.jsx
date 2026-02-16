import
import axios from "axios";
import "./App.css";


function App() {
  return (
    <>
      <div className="container">
        <h3>Crud Project with Reactjs and Node as Backend</h3>
        <div className="input-search">
          <input type="search" />
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
              <tr>
                <td>1</td>
                <td>அன்பு</td>
                <td>28</td>
                <td>சென்னை</td>
                <td>
                  <button className="btn green" >Edit</button>
                </td>
                <td>
                  <button className="btn red" >Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>அன்பு</td>
                <td>28</td>
                <td>சென்னை</td>
                <td>
                  <button  className="btn green">Edit</button>
                </td>
                <td>
                  <button  className="btn red">Delete</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>அன்பு</td>
                <td>28</td>
                <td>சென்னை</td>
                <td>
                  <button  className="btn  green">Edit</button>
                </td>
                <td>
                  <button  className="btn red">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

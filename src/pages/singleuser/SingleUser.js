import { Select } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./SingleUser.css";

const SingleUser = () => {
  const { id } = useParams();
  const [row, setRow] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [state, setstate] = useState(true);
  useEffect(() => {
    async function getUser() {
      const res = await fetch(`http://localhost:8081/users/${id}`);
      const data = await res.json();
      setRow(data);
      
    }
    getUser();
  }, []);

  console.log(row)

  console.log(name )
  console.log(role)
  const handleSubmit = (event) => {

    const form = event.currentTarget;
        var compte = JSON.stringify({
            id:row.id,
            name: row.name,
            email: row.email,
            password: row.password,
            role: role,
        });
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: "PUT",
            headers: myHeaders,
            mode: 'no-cors',
            body: compte,
            redirect: "follow",
        };

        fetch("http://localhost:8081/update", requestOptions);

    };
    

  return (
    <>
      <div className="singleuser">
        <Sidebar />
        <div className="container-fluid singleuserContainer">
          <div className="row ">
            <h3 className="text-center">User Information</h3>
            <div className="wrapperuserBox">
              {/* left side container */}
              <div className="col-md-8 leftSideContainer">
                <form className="productForm" onSubmit={handleSubmit}>
                  <label htmlFor="">Name</label>
                  <br />
                  <input type="text" value={name} 
                   onChange={(e) => setName(e.target.value)}
                   placeholder={row.name}
                   />
                   
                  <br />

                  <label htmlFor="">Email</label>
                  <br />
                  <input type="text" value={row.email} disabled />
                  <br />

                  <label htmlFor="">Rôle</label>
                  <br />
                  <select NAME="role" value={role} 
                   onChange={(e) => setRole(e.target.value)}
                   placeholder={row.role}>
                    <option value ={"etudiant"}>etudiant</option>
                    <option value ={"enseignant"}>enseignant</option>
                  </select>
                  <br />
                </form>
              </div>
              <button className="buttonBelete" onClick={handleSubmit}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUser;

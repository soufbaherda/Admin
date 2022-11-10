import { GolfCourse } from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { Delete } from "@material-ui/icons";
import "./Update.css";

const Update = () => {
  const { id } = useParams();
  const [cours, setCours] = useState([]);
  const [num, setNum] = useState(0);
  const [state, setState] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();



  async function getBook() {
    const res = await fetch(`http://localhost:8080/cours/${id}`);
    const data = await res.json();
    setCours(data);
  }
  async function getUser() {
    const res = await fetch(`http://localhost:8081/${id}/usersCours`);
    const data = await res.json();
    setUser(data.etudiants);
  }

  useEffect(() => {
    getBook();
    getNum();
    getUser();
  }, []);
  console.log(user);
  async function getNum() {
    const res = await fetch(`http://localhost:8081/${id}/users`);
    const data = await res.json();
    setNum(data);
    if (num > 0) {
      setState(true);
    }
  }
  console.log(cours)
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "name", headerName: "Name", width: 160 },
    { field: "role", headerName: "Rôle", width: 160 },
  ]

  const handClick = (id)=>{
    if(num<=0){}
    fetch(`http://localhost:8080/cours/${id}`, { method: 'DELETE' });
    navigate("/product")
  }

  return (
    <>
      <div className="update">
        <Sidebar />

        <div className="container-fluid updateContainer">
          <div className="updatetContainerTitle">
            <h1>Course</h1>
          </div>
          <div className="row">
            {/* left side container */}
            <div className="col-md-8 leftSideContainer">
              <form className="productForm" >
                <label htmlFor="">Name</label>
                <br />
                <input type="text" value={cours.name}

                  placeholder={cours.name}
                />

                <br />

                <label htmlFor="">About</label>
                <br />
                <p>{cours.about}</p>
                <br />

                <label htmlFor="">difficulty_level</label>
                <p>{cours.difficultyLevel}</p>
                <br />
                <label htmlFor="">university</label>
                <p>{cours.university}</p>
                <br />
                <label htmlFor="">Numbre de etudiant inscrit au cours :</label>
                {num > 0 ? <p>{num} étudiants </p> : <p>0 étudiant</p>}
                <br />
                <br />
              </form>
            </div>
            {/* right side */}
            <div className="col-md-4 rightSideContainer">
              <div className="productImg">
                <img
                  src={cours.img}
                  alt=""
                />
                <br />
                <button className="button_delete" onClick={()=>{num > 0? alert("Impossible de supprimer ce cours"):handClick(id)}} >
                  <Delete />
                </button>
                {/* delete   button*/}

              </div>
            </div>

          </div>
          <div style={{ height: "200px", width: "96%" }}>
            <h1 style={{ textAlign: "center" }}>Les étudiants :</h1>
            <DataGrid
              rows={user}
              columns={columns}
              pageSize={7}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
            // getRowId={(r) => r._id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;

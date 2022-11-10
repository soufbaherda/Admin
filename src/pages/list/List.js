import React , {useState, useEffect} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./List.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";



const List = () => {
  const [state, setState] = useState("");
  const handClick = (id)=>{
    fetch(`http://localhost:8081/delete/${id}`, { method: 'DELETE' })
          .then(() => this.setState({ status: 'Delete successful' }));
  }
  const [row,setRow] = useState([]);
  useEffect(() => {
  async function getUser() {
    const res = await fetch(`http://localhost:8081/users`);
    const data = await res.json();
    setRow(data);
  }

  getUser();
}, [row]);

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "email", headerName: "Email", width: 160 },
  { field: "name", headerName: "Name", width: 160 },
  { field: "role", headerName: "Rôle", width: 160 },  
  {
    field: "action",
    headerName: "Action",
    width: 230,
    renderCell: (params) => {
      return (
        <>
          {/* view data button*/}
          <Link to={`/list/` + params.row.id}>
            <button className="button_Edit">View</button>
          </Link>
          {/* delete  user data button*/}
            <button className="button_delete" onClick={()=>{handClick(params.row.id)}}>Delete</button>
        </>
      );
    },
  },
  
];

  return (
    <div className=" list">
      {/* side bar is imnported from side bar container
       */}
      <Sidebar />
      <div className="listContainer">
        <div className="ProductTitle text-center"><h1>All List</h1></div>
        {/* <Link to="/new" className="text-end">
          <button className="button_Edit">Edit</button>
        </Link> */}
        <div style={{ height: 520, width: "96%" }}>
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[8]}
            disableSelectionOnClick
            // getRowId={(r) => r._id}
          />
        </div>
      </div>
    </div>
  );
};

export default List;

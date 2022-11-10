import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
// import "./Allproduct.css";
import { DataGrid } from "@mui/x-data-grid";
import "./Allproduct.css";



const Allproduct = () => {
  const [row, setRow] = useState([]);
  const [state, setState] = useState("");
  const [num,setNum] = useState(0);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    //image
    {
      field: "img",
      headerName: "img",
      width: 90,
      renderCell: (params) => {

        return (
          <>
            {/* user image */}
            <div className="userImg">
              <img
                src={params.row.img}
                alt=""
              />
            </div>
          </>
        );
      },
    },
    { field: "link", headerName: "Link ", width: 160 },
    { field: "about", headerName: "About ", width: 160 },
    { field: "name", headerName: "Title", width: 160 },
    { field: "university", headerName: "University", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            {/*  data button*/}
            <Link to={`/product/` + params.row.id}>
              <button className="button_update" >
                View
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    async function getRow() {
      const res = await fetch(`http://localhost:8080/cours`);
      const data = await res.json();
      setRow(data);
      console.log(row);
    }
    getRow();
  }, []);
 
  return (
    <>
      <div className="allproduct">
        <Sidebar />

        <div className="allContainer">
          {/* top bar create button */}
          <div className="allContainerWrapper">
            <div className="ProductTitle ">All Products</div>
          </div>

          <div
            className="tableContainer"
            style={{ height: 520, width: "96%" }}
          >
            <DataGrid
              rows={row}
              columns={columns}
              pageSize={7}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
            //   getRowId={(r) => r._id}
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default Allproduct;

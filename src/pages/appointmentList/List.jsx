import React from "react";
import "./list.scss";
import {
  appointmentColumns,
  appointmentRows,
} from "../../pages/appointments/Appointments";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const List = () => {
  return (
    <>
      <div className="main-container">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="datatable listContainer">
          <div style={{ marginTop: "-20px", marginLeft: "-1.3rem", borderBottom:"1px solid rgb(230, 227, 227)" }}>
            <Navbar />
          </div>

          <div className="datatableTitle">
            Appointments List
          </div>
          <DataGrid
            className="datagrid"
            rows={appointmentRows}
            columns={appointmentColumns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
};

export default List;

import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../App.css";
const TaskTable = ({ tasks, setTasks }) => {
  const [rowData, setRowData] = useState(tasks);

  useEffect(() => {
    setRowData(tasks);
  }, [tasks]);

  const columns = [
    { headerName: "Task ID", field: "id", editable: false },
    { headerName: "Title", field: "title", editable: true },
    { headerName: "Description", field: "description", editable: true },
    {
      headerName: "Status",
      field: "status",
      filter: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["To Do", "In Progress", "Done"],
      },
    },
  ];

  const onCellEditingStopped = (event) => {
    const updatedTasks = rowData.map((task) =>
      task.id === event.data.id ? event.data : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div
      className="ag-theme-alpine"
      //
      style={{
        height: 900,
        width: "100%",
        margin: "auto",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columns}
        defaultColDef={{ sortable: true, flex: 1, resizable: true }}
        onCellEditingStopped={onCellEditingStopped}
      />
    </div>
  );
};

export default TaskTable;

import React, { useState, useCallback } from "react";
import { dataArray } from "./dataArray.js";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const defaultColDef = { maxWidth: 200, floatingFilter: true, resizable: true };

function BasicTable() {
  const [tableData, setTableData] = useState(dataArray);
  const [gridApi, setGridApi] = useState(null);
  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const removeSelected = useCallback(
    () => {
      const selectedRows = gridApi.getSelectedRows();
      const selectedIdArray = selectedRows.map((e) => e.id);
      const newData = tableData.filter((e) => !selectedIdArray.includes(e.id));
      setTableData(newData);
    },
    [gridApi, setTableData, tableData],
  )

  const reset = useCallback(
    () => {
      setTableData(dataArray);
    },
    [setTableData],
  )


  return (
    <React.Fragment>
      <div className="container my-3 mx-auto">
        <div
          className="ag-theme-alpine container"
          style={{ height: "60vh", width: "95vw" }}
        >
          <h4 className="my-3 mx-auto">Table</h4>
          <AgGridReact
            onGridReady={onGridReady}
            rowSelection={"multiple"}
            rowData={tableData}
            defaultColDef={defaultColDef}
          >
            <AgGridColumn
              headerCheckboxSelection={true}
              checkboxSelection={true}
              width= {50}
            />
            <AgGridColumn headerName="ID" field="id"/>
            <AgGridColumn
              headerName="name"
              field="name"
              filter="agTextColumnFilter"
            />
            <AgGridColumn
              headerName="price"
              field="price"
              sortable={true}
              editable={true}
            />
            <AgGridColumn
              headerName="Coupon"
              field="coupon"
            />
            <AgGridColumn
              headerName="In stock"
              field="inStock"
            />
          </AgGridReact>
        </div>
        <div className="container my-5 p-5 mx-auto">
          <button
            className="button"
            onClick={removeSelected}
          >
            DELETE
          </button>
          <button
            className="button"
            onClick={reset}
          >
            RESET
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BasicTable;

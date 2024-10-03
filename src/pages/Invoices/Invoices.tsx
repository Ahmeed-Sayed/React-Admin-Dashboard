import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import mockDataInvoices from "../../data/mockDataInvoices";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "phone", headerName: "Phone Number", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "cost", headerName: "Cost",flex:1,cellClassName:"cost-column-cell" },
  { field: "date", headerName: "Date", flex: 1 },
];

export default function Invoices() {
  return (
    <Box sx={{ height: "75vh", width: "100%" }}>
      <DataGrid
        rows={mockDataInvoices}
        columns={columns}
        checkboxSelection
        sx={{
          "& .MuiDataGrid-root, .MuiDataGrid-virtualScroller": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeader, .MuiDataGrid-footerContainer": {
            backgroundColor: "info.dark",
          },
          "& .MuiDataGrid-cell": {
            borderTop: "none",
            display: "flex",
            alignItems: "center",
          },
          "& .cost-column-cell":{
            color:"secondary.main"
          }
        }}
      />
    </Box>
  );
}

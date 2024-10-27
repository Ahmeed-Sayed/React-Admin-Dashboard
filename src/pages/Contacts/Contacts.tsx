import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import mockDataContacts from "../../data/mockDataContacts";
import PageHeader from "../../components/PageHeader/PageHeader";
import { tokens } from "../../utils/theme";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "registrarId", headerName: "Registrar ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column-class",
  },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "age", headerName: "Age" },
  { field: "phone", headerName: "Phone", flex: 1 },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "city", headerName: "City" },
  { field: "zipCode", headerName: "Zip Code" },
];

export default function Contacts() {
  const  theme=useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <>
    <PageHeader
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
    <Box sx={{ height: "75vh", width: "100%" }}>
      <DataGrid
        rows={mockDataContacts}
        columns={columns}
        sx={{
          backgroundColor: colors.primary[400],
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
          "& .name-column-class": {
            color: "secondary.main",
          },
        }}
      />
    </Box>
    </>
  );
}

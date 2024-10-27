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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box bgcolor={colors.primary[400]} p={2} borderRadius={1}>
      <PageHeader
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <Box sx={{ height: "75vh", width: "100%" }}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          style={{ border: "none" }}
          sx={{
            backgroundColor: colors.primary[400],
            "& .MuiDataGrid-columnHeader, .MuiDataGrid-footerContainer, .MuiTablePagination-root": {
              backgroundColor: "info.main",
              color: "white",
            },
            "& .MuiSvgIcon-root": {
              color: theme.palette.mode === "dark" ? "white" : "black",
            },
            "& .MuiDataGrid-cell": {
              borderTop: "none",
              display: "flex",
              alignItems: "center",
            },
            "& .cost-column-cell": {
              color: "secondary.main",
            },
          }}
        />
      </Box>
    </Box>
  );
}

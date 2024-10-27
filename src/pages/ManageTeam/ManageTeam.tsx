import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import { mockDataTeam } from "../../data/mockDataTeam";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PageHeader from "../../components/PageHeader/PageHeader";
import { tokens } from "../../utils/theme";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "age", headerName: "Age" },
  { field: "phone", headerName: "Phone Number", flex: 1 },
  {
    field: "access",
    headerName: "Access Level",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      const { access } = params.row;
      return (
        <Box
          width="60%"
          p="5px"
          m="0 auto"
          display="flex"
          bgcolor="secondary.main"
          color="white"
          gap={2}
          justifyContent="center"
          borderRadius="5px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon style={{color:"white"}}/>}
          {access === "manager" && <SecurityOutlinedIcon style={{color:"white"}}/>}
          {access === "user" && <LockOpenOutlinedIcon style={{color:"white"}}/>}
          <Typography>{access}</Typography>
        </Box>
      );
    },
  },
];

export default function ManageTeam() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box bgcolor={colors.primary[400]} p={2} borderRadius={1}>
      <PageHeader title="Team" subTitle="Managing the Team Members" />
      <Box sx={{ height: "75vh", width: "100%" }} bgcolor={colors.primary[400]}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          checkboxSelection
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

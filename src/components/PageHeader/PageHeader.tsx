import { Typography, Box } from "@mui/material";
import { PageHeaderType } from "../../utils/interfaces";

const PageHeader: React.FC<PageHeaderType> = ({ title, subTitle }) => {
  return (
    <Box mb="30px">
      <Typography variant="h2" fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
        {title}
      </Typography>
      <Typography variant="h5" color="secondary.main">{subTitle}</Typography>
    </Box>
  );
};

export default PageHeader;

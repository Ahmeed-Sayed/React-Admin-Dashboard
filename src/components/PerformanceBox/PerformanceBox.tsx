import { Box, Stack, Typography, useTheme } from "@mui/material";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import { PerformanceBoxType } from "../../utils/interfaces";
import { tokens } from "../../utils/theme";
const PerformanceBox: React.FC<PerformanceBoxType> = ({
  icon,
  increase,
  progress,
  subTitle,
  title,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      width="20%"
      display="flex"
      justifyContent="space-between"
      px="1rem"
      py="1.5rem"
      bgcolor={colors.primary[400]}
      minWidth="100%"
      height="100%"
      alignItems="center"
    >
      <Stack direction="column" color="secondary.main" spacing={1}>
        {icon}
        <Typography color="text.primary">{title}</Typography>
        <Typography>{subTitle}</Typography>
      </Stack>

      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <ProgressCircle progress={progress} />
        <Typography color="secondary.main" variant="subtitle2">
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default PerformanceBox;

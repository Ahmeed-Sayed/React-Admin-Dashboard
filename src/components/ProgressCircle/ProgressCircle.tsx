import { Box, colors } from "@mui/material";
const ProgressCircle: React.FC<{ progress: string; size: string }> = ({
  progress = "0.75",
  size = "40",
}) => {
  const angle = progress * 360;
  return (
    <Box display="flex" justifyContent="center" py={1}>
      <Box
        sx={{
          background: `radial-gradient(${colors.blueGrey[800]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, blue ${angle}deg 360deg),
            ${colors.yellow[800]}`,
          borderRadius: "50%",
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    </Box>
  );
};

export default ProgressCircle;

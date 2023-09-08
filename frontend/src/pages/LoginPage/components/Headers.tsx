import { Box, Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react";

interface HeadersProps {}

const Headers: FunctionComponent<HeadersProps> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: theme.spacing(2) }}
    >
      <Typography variant="h3">Welcome</Typography>
      <Typography variant="body1" color="text.secondary">
        Welcome! Please enter your details
      </Typography>
    </Box>
  );
};

export default Headers;

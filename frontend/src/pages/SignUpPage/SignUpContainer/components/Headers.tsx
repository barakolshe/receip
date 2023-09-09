import ResponsiveTypography from "@/components/common/ResponsiveTypography";
import { Box, Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react";

interface HeadersProps {}

const Headers: FunctionComponent<HeadersProps> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
        textAlign: { xs: "center", md: "start" },
      }}
    >
      <ResponsiveTypography variants={{ xs: "h3", md: "h2" }}>
        Sign up
      </ResponsiveTypography>
      <Typography variant="body1" color="text.secondary">
        Sign up for free! enter your details
      </Typography>
    </Box>
  );
};

export default Headers;

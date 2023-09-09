import Link from "@/components/common/Link";
import { Box, Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface LoginOptionsProps {}

const LoginOptions: FunctionComponent<LoginOptionsProps> = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: theme.spacing(0.5),
        marginX: "auto",
      }}
    >
      <Typography variant="body2" color={theme.palette.text.secondary}>
        Have an account?
      </Typography>
      <Link onClick={() => navigate("/login")}>Sign in</Link>
    </Box>
  );
};

export default LoginOptions;

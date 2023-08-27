import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FlexBetween from "@/components/FlexBetween";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// type Props = {};

const Navbar = () => {
  const { palette } = useTheme();

  const [selected, setSelected] = useState("dashboard");

  // setup dark mode toggle function 
  const toggleDarkMode = () => {};


  return (
    <FlexBetween mb={"0.25rem"} p={"0.5rem 0rem"} color={palette.grey[300]}>
      <FlexBetween gap={"0.68rem"}>
        <FingerprintIcon sx={{ fontSize: "large" }} />
        <Typography variant="h4" fontSize={"large"}>
          Fingerprint Finance
        </Typography>
      </FlexBetween>
      <FlexBetween gap={"2rem"}>
        <DarkModeIcon cursor={"pointer"}
          onClick={toggleDarkMode}
          sx={{ "&:hover": { color: palette.primary[100] } }}
        />
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to={"/"}
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            {" "}
            dashboard
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to={"/"}
            onClick={() => setSelected("prediction")}
            style={{
              color: selected === "prediction" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            {" "}
            prediction
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;

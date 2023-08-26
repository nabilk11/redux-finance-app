// STYLED COMPONENT - rather than using a Box and styling it

import { Box } from "@mui/material";
import { styled } from "@mui/material";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;

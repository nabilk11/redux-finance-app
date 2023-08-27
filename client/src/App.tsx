import { createTheme } from "@mui/material/styles";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/screens/navbar";
import Dashboard from "@/screens/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width={"100%"} height={"100%"} padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<div>PredictionsPage</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

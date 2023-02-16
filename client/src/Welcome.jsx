import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Album() {
  const [email, setEmail] = React.useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // To get data from local storage

    // fetch version async/await
    const authentication = async () => {
      // request to server to verify token
      const response = await fetch("http://localhost:3333/authen", {
        method: "POST",
        headers: {
          // Content-Type: application/json is required for POST request to work with Express server (body-parser)
          "Content-Type": "application/json",
          // Authorization: Bearer <token> is required for Express server to verify token
          Authorization: "Bearer " + token,
        },
      });
      // get data from server response (json)
      const data = await response.json();
      // check status from server response
      if (data.status === "ok") {
        console.log("data from server: ", data);
        console.log("token: ", token);
        // set data to state
        setEmail(data.decoded.email);
      } else {
        alert("Authentication failed");
        // To clear a specific item from local storage
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    };
    authentication();

    // fetch version callback function
    /*
    fetch("http://localhost:3333/authen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          // set data to state
          console.log("data from server: ", data);
          console.log("token: ", token);
          setEmail(data.decoded.email);
        } else {
          alert("Authentication failed");
          // To clear a specific item from local storage
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      */

  }, []);

  const handleLogout = () => {
    // To clear a specific item from local storage
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hello Welcome
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {/* show email */}
              {email}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}

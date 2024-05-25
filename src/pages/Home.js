import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Banner})`,
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: { xs: "0 20px", md: "0 50px" },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "auto" }, ml: { xs: 0, md: "30px" } }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "40px", md: "70px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Food Website
        </Typography>
        <Typography
          sx={{
            mt: 3,
            fontWeight: "lighter",
            fontSize: { xs: "24px", md: "40px" },
            textAlign: { xs: "center", md: "left" },
          }}
          variant="body1"
        >
          Best food in India
        </Typography>
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2 }} variant="contained">
              ORDER NOW
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;


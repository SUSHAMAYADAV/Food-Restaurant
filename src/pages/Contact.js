import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
function Contact() {
  return (
    <Box sx={{ my: 5, ml: 10 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Contact My Resturant
      </Typography>
      <Typography variant="body1">
        : "Exciting New Menu Items at [Restaurant Name]!" or "Exclusive Offer:
        20% Off Your Next Meal!" Personalize Greeting: Begin the email with a
        personalized greeting, addressing the recipient by their name (if
        possible).
      </Typography>
      <Box sx={{ m: 3, width: "600px", ml: 10 }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 2 }} />
                  1800-00-0000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 2 }} />
                  abc123@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 2 }} />
                  94531098
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Contact;

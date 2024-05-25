import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { List, ListItem, ListItemText } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#07090a" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "block" },
              alignItems: "center",
              color: "white",
            }}
          >
            <FastfoodIcon sx={{ pr: 2 }} />
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
              My Restaurant
            </Box>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            <List sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
              <ListItem
                disablePadding
                component="a"
                href="/"
                sx={{ color: "white", textAlign: "center" }}
              >
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                disablePadding
                component="a"
                href="/menu"
                sx={{ color: "white", textAlign: "center" }}
              >
                <ListItemText primary="Menu" />
              </ListItem>
              <ListItem
                disablePadding
                component="a"
                href="/about"
                sx={{ color: "white", textAlign: "center" }}
              >
                <ListItemText primary="About" />
              </ListItem>
              <ListItem
                disablePadding
                component="a"
                href="/contact"
                sx={{ color: "white", textAlign: "center" }}
              >
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


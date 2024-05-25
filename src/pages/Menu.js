import React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { MenuList } from "../data/data";
function Menu() {
  console.log("--", MenuList);
  return (
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      {MenuList.map((menu,index) => (
        <Card key={index} sx={{maxWidth:'390px',display:'flex',m:2}}>
          <CardActionArea>
            <CardMedia
              sx={{ height: "400px" }}
              component={"img"}
              src={menu.image}
              alt={menu.name}
            />
            <CardContent>
            <Typography variant="h5" gutterBottom component={'div'}>{menu.name}</Typography>
            <Typography variant="body2">{menu.description}</Typography>
            <Typography variant="body1">Rs.{menu.price}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default Menu;

import React from "react";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ height: "70vh" }}>
      <Typography
        variant="h4"
        sx={{ my: 10, textAlign: "center", fontWeight: "bold" }}
      >
        Welcome to My Resturant
      </Typography>

      <Typography
        variant="body1"
        mb={1}
        sx={{ my: 10, textAlign: "center", fontWeight: "bold" }}
      >
        What is React JS used for? ReactJS's primary goal is to create User
        Interfaces (UI) which enhance the speed of programs. It makes use of
        virtual DOM (JavaScript object), which enhances the app's efficiency.
        Quicker than the standard DOM is the JavaScript virtual DOM.5 Oct 2023
      </Typography>
      <Typography>
        React.js, more commonly known as React, is a free, open-source
        JavaScript library. It works best to build user interfaces by combining
        sections of code (components) into full websites. Originally built by
        Facebook, Meta and the open-source community now maintain it. One of the
        good things about React is that you can use it as much or as little as
        you want! For example, you can build your entire site in React or just
        use one single React component on one page. React.js is built using JSX
        – A combination of JavaScript and XML. Elements are created using JSX,
        then use JavaScript to render them on your site. While React has a steep
        learning curve for a junior developer, it’s quickly shaping into one of
        the most popular and in-demand JavaScript libraries.
      </Typography>
    </Box>
  );
}

export default About;

import "./Footer.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }} id="footerId">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <a href="https://www.facebook.com/danielmalede/" target="_blank" ><BottomNavigationAction label="Facebook" icon={<FacebookIcon />} /></a> 
        <a href="https://www.linkedin.com/in/daniel-malede-61152272/" target="_blank" ><BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} /></a> 
        <a href="https://github.com/DanielMalede" target="_blank" ><BottomNavigationAction label="GitHub" icon={<GitHubIcon />} /></a> 
      </BottomNavigation>
    </Box>
  );
}

export default Footer;

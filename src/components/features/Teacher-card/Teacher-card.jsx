import "./Teacher-card.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function TeacherCard({teachers}) {
  // const {FirstName} =teachers,FirstName,Age
  return (
    <Card sx={{ minWidth: 275 ,color:'primary.main',display: "inline-block",m:4,backgroundColor:"#20BEE5"}} >
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      title:{FirstName}
      </Typography>
      <Typography variant="h5" component="div">
      year:{}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      cast:{}
      </Typography>
      <Typography variant="body2">
      genres:{}
        <br />
      </Typography>
    </CardContent>
  </Card>
  );
};

export default TeacherCard;

import "./Teachers.css";
import React, { useEffect, useState } from "react";
import teachersApi from "../../../service/Teachers";
import { techetsContext } from "../../contexts/Teachers-context/Teachers-context";
import TeacherCard from "../../features/Teacher-card/Teacher-card";
function Teachers() {
  const {teachers,setTeachers} = useState(techetsContext);
  useEffect(() => {
    teachersApi().then(res => 
      setTeachers(res)
      // console.log(res)
    );
  }, []);
  return <div>
    <TeacherCard teachers={teachers} />
  </div>;
}

export default Teachers;

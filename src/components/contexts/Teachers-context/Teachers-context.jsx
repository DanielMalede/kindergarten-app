import "./Teachers-context.css";
import React, { createContext, useState } from "react";

export const techetsContext = createContext()
function TeachersProvider({children}) {
  const [teachers,setTeachers] = useState([])
  return (
    <div className="teachers-context">
      <techetsContext.Provider>
        {children}
      </techetsContext.Provider>
    </div>
  );
};

export default TeachersProvider;

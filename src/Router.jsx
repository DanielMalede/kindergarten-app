import { Movies,Contact,Home,ParentsCommittee,NotFound,Teachers,Classes } from "./components/index";
import { Routes ,Route } from "react-router-dom";
import TeachersProvider from "./components/contexts/Teachers-context/Teachers-context";

export default function Router (){
    return(
        <Routes>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="Teachers" element={<TeachersProvider><Teachers/></TeachersProvider>}></Route>
            <Route path="ParentsCommittee" element={<ParentsCommittee/>}></Route>
            <Route path="Classes" element={<Classes/>}></Route>
            <Route path="Contact" element={<Contact/>}></Route>
        </Routes>
    )
}
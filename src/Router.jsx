import { Contact,Home,ParentsCommittee,NotFound,Teachers,Classes } from "./components/index";
import { Routes ,Route } from "react-router-dom";

export default function Router (){
    return(
        <Routes>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="Teachers" element={<Teachers/>}></Route>
            <Route path="ParentsCommittee" element={<ParentsCommittee/>}></Route>
            <Route path="Classes" element={<Classes/>}></Route>
            <Route path="Contact" element={<Contact/>}></Route>
        </Routes>
    )
}
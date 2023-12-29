import React from "react";
import './Drawer.scss';
import { MdArrowBackIosNew } from "react-icons/md";

const Drawerheader = ({setvisibleDrawer}) =>{
    return (<div className="drawer_header">
        <button className="drawer_backbutton" onClick={()=>{setvisibleDrawer(false)}}>
            <MdArrowBackIosNew/>
        </button> 
        Saving Segment
        </div>)
}

export default Drawerheader;
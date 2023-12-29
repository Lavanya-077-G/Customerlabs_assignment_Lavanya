import React, { useEffect, useState } from "react";
import './Drawer.scss';
import PopupComponent from '../Popup';
import Drawerheader from "./Drawerheader";
import Drawerfooter from "./Drawerfooter";
import DrawerContent from "./DrawerContent";
import {options} from './data';

const Drawer = ({setvisibleDrawer}) =>{
    const [dropdownOptions,setOptions] = useState(options);
    const [addschemaValue, setaddschemaValue] = useState();
    const [newSchema,setnewSchema] = useState([]);
    const [showPopup,setshowPopup] = useState(false);
    const [popupContent,setpopupContent] = useState("");
    const [segmentName, setsegmentName] = useState();

    useEffect(()=>{
        let arr = [];

        for (let i = 0; i < options.length; i++) {
          if (!newSchema.some((schemaItem) => schemaItem.value === options[i].value)) {
            arr.push(options[i]);
          }
        }
        
        setOptions(arr);
     
    },[newSchema])

    const handleSelect = (value) =>{
       const selectedOpt = options.filter(obj => obj.value === value);
       setaddschemaValue(...selectedOpt);
    }

    const handleAddschema = () =>{
        if(addschemaValue){
        setnewSchema([...newSchema,addschemaValue])
        setaddschemaValue();
        }
        else{
            setshowPopup(true);
            setpopupContent("select Add schema to segment")
        }
    }

    const handleMinusClick = (val) =>{
       if(!val.Addschema){ const filteredData = [...newSchema].filter(obj=>obj.value !== val.value)
       setnewSchema(filteredData)}
    else{
        setaddschemaValue();
    }
    }

    const handleNewSchemaChange = (val,schema,index) =>{
        let arr = [];
        for(let i=0;i<newSchema.length;i++){
            if(i === index){
                const filteredOption = options.filter(obj=>obj.value === val);
                arr.push(...filteredOption);
            }
            else{
                arr.push(newSchema[i])
            }
        }
        setnewSchema(arr)
    }

    const drawerContentProps = {
        dropdownOptions,
        segmentName,
        setsegmentName,
        newSchema,
        handleNewSchemaChange,
        handleMinusClick,
        addschemaValue,
        handleSelect,
        handleAddschema,
    }

    return (<div className="drawer_container">
        <Drawerheader setvisibleDrawer={setvisibleDrawer}/>
        <DrawerContent {...drawerContentProps}/>
        <Drawerfooter setvisibleDrawer={setvisibleDrawer} segmentName={segmentName} newSchema={newSchema}/>
        {showPopup && <PopupComponent isPopupVisible={showPopup} setPopupVisible={setshowPopup} popupContent={popupContent}/>}
        
    </div>)
}

export default Drawer;
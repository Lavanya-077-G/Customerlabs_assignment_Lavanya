import React from "react";
import './Drawer.scss';
import {  Select } from 'antd';
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import  {Style_Select, options} from './data'



const DrawerContent = (props) =>{
    const {segmentName, setsegmentName, newSchema, handleNewSchemaChange, handleMinusClick, addschemaValue,
    handleSelect, handleAddschema, dropdownOptions } = props;

    const getOptions = (opt) =>{
        let arr = [];

        for (let i = 0; i < options.length; i++) {
          if (!newSchema.some((schemaItem) => schemaItem.value === options[i].value)) {
            arr.push(options[i]);
          }
        }
        
       return [...arr, opt];
    }
    return (<>
     <div className="input_name_container">
    <div>Enter the name of the segment</div>
    <input placeholder="Name of the segment" value={segmentName} onChange={(e)=>{setsegmentName(e.target.value)}}/>
    <div>To save your segment, you need to add the schemas to build to build the query</div>
    </div>

    <div className={ newSchema.length ? "newschema_container": ""}>
    {
        newSchema.length ? newSchema.map((schema,index)=>{
            return(<div style={{marginBottom: '1rem'}}>
                <Select className="select" id={schema.label} style={Style_Select} onChange={(val)=> {handleNewSchemaChange(val,schema,index)}}  value={schema.value} options={getOptions(schema)}/>
                <button className="btn_minus" onClick={()=>{handleMinusClick(schema)}}><FaMinus/></button>
                </div>)
        }) : <></>
    }
    </div>

    <div>
    <Select 
    className="select" 
    style={{...Style_Select,marginLeft:'2rem', width: "76%"}} 
    value={addschemaValue} 
    placeholder="Add schema to segment" 
    onChange={handleSelect} 
    options={dropdownOptions}
    />
    <button  onClick={()=>{handleMinusClick({Addschema:true})}} className="btn_minus"><FaMinus/></button>
    </div>

    <button type="link" className="btn_add_newschema" onClick={handleAddschema}><FiPlus/> Add new schema</button>
    </>)
}
export default DrawerContent;
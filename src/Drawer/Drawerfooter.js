import React from "react";
import './Drawer.scss'
const Drawerfooter = ({setvisibleDrawer, segmentName, newSchema}) =>{
const webhookUrl = 'https://webhook.site/b988ac83-6521-4a90-af94-663f3c9625c9';

const sendDataToWebhook = async (data) => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log('Data sent successfully:', data);
  } catch (error) {
    console.error('Error sending data:', error.message);
  }
};


    const handleSave = () =>{
        const schema = newSchema.map((obj)=> {return({[obj.value] : obj.label
        })});
        const data = {
            segment_name: segmentName || "",
            schema: schema || [],
        }
        sendDataToWebhook(data);
    }

    return(<div className="drawer_footer">
        <button onClick={handleSave} className="btn_save">Save the Segment</button>
        <button className="btn_cancel" onClick={()=>{setvisibleDrawer(false)}}>Cancel</button>
        </div>)
}
export default Drawerfooter;
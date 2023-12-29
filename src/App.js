import { useState } from 'react';
import './App.css';
import Drawer from '../src/Drawer/index';

function App() {
  const [visibleDrawer,setvisibleDrawer] = useState(false);
  const handleClick = () =>{
    setvisibleDrawer(true);
  }
  return (
    <div className={`App ${visibleDrawer ? 'drawer-open' : ''}`}>
      <div className='btn_savesegment_container'>
        <button className='btn_savesegment' onClick={handleClick}>Save segment</button>
      {  visibleDrawer && <Drawer setvisibleDrawer={setvisibleDrawer} visibleDrawer={visibleDrawer}/>}
      </div>
    </div>
  );
}

export default App;

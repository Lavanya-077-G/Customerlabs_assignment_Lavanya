import React from 'react';
import './Popup.scss';

const PopupComponent = ({isPopupVisible,popupContent,setPopupVisible}) => {
  

  const handleTogglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>{popupContent}</p>
            <button onClick={handleTogglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
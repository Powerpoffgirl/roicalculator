import React from 'react'
import './Header.css'
import CloseIcon from '@mui/icons-material/Close';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

function header() {
  return (
    <div className="header"> 
      <div className="header_top">
          <div className="header_left">
            <h2><strong>Calculator</strong></h2>
          </div>
          <div className="header_right">
            <CloseIcon/>      
          </div>
      </div>
      <div className="header_bottom">
        <p>Cake</p> <ToggleOffIcon/> <p>USD</p>
      </div>
    </div>
    
    
  )
}

export default header
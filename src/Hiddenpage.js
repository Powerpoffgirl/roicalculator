import React from 'react'
import './Hiddenpage.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowDown';

function Hiddenpage() {
  return (
    <div className="hiddenpage">
        <p>Hide details<KeyboardArrowUpIcon/></p>
        <h2>APY</h2>
        <li>Calculated based on current rates</li>
        <li>All figures are estimates provided for your convenience only, and by no means represent guaranted returns. </li>
    </div>
  )
}

export default Hiddenpage
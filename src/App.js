import { Input } from '@mui/material';
import './App.css';
import Balance from './Balance';
import Header from './Header';
import Days from './Days';
import Tier from './Tier';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import Hiddenpage from './Hiddenpage';

function App() {
  return (
    <div className="app"> 
        <Header />
          <div className="input1">
            <Input/>
          </div>
          <Balance/>
          <p><strong>Timeframe</strong></p>
          <Days/>
          <div>
          <div className='apy'>
          <h4> Enable Accelerated APY</h4>
          <ToggleOffIcon className='toi'/>
          </div> 
          </div>
          <p1>Select Tier</p1>
          <Tier/>
          <p2>ROI at Current Rates</p2>
          <div className='input2'>
          <Input/>
          </div>
          <p3>~ 3CAKE + 10 DON</p3>
          <div className='footer_top'>
            <button>Apply</button>
            <button1>Cancel</button1>
        </div>
        <Hiddenpage/>
    </div>
  );
}

export default App;

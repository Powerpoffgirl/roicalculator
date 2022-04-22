import React from 'react'
import './Hide.css'

function Hide() {
  return (
    <div className="hide">
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
      <Footer/>
    </div>
    </div>
  )
}

export default Hide
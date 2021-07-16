import React from 'react';
import './summary.css'

function BalanceSurmary() {
    return (
        <div className='container'>
             <div className='container-one'>
             <div className='up'>
                <small>Total Account Balance</small>
                <select>
                    <option value='USD'>USD</option>
                    <option value='EURO'>Euro</option>
                    <option value='NGN'>NGN</option>
                </select>
            
            </div>
            <div className='down'>
            <div className='left'>
            <h2>$5,332.45</h2>
            <small>1 USD - 385.78 NGN</small>
            
            </div>

            <div className='right'>
                <div className='right-items'>KES</div>
                <div className='right-items'>NGN</div>
                <div className='right-items'>GHC</div>
            
            
            </div>
            
            
            </div>
            
            </div>
            <div className='container-two'>
                <p>Funds on hold</p>
            
                <h2>$5,332.45</h2>
            </div>
            
        </div>
    )
}

export default BalanceSurmary

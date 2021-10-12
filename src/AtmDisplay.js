import React from 'react'
import './App.css'

function AtmDisplay(props) {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <div>Enter the Amount</div>
        <div>
          <input
            type='number'
            value={props.amount}
            min='0'
            onChange={props.handleAmountChange}
            placeholder='Enter the Amount..'
          />
        </div>
        <div>
          <button
            type='button'
            disabled={!props.amount}
            onClick={props.handleSubmit}
          >
            Get Money
          </button>
        </div>
      </div>
    </div>
  )
}

export default AtmDisplay

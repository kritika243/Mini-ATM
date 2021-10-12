import React, { useState } from 'react'
import AtmDisplay from './AtmDisplay'
import AtmTotal from './AtmTotal'
import './App.css'

function App() {
  let [amount, setAmount] = useState(0)
  const [amountDetails, setAmountDetails] = useState(null)
  const [balance, setBalance] = useState(0)

  const notes = [2000, 500, 200, 100]

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }
  const handleSubmit = () => {
    let notes_detail = []
    function getNoteCount(a, n) {
      let note = Math.floor(a / n)
      amount = a % n
      notes_detail.push([n, note])
    }
    notes.forEach((note) => {
      if (amount >= note) {
        getNoteCount(amount, note)
        setBalance(amount)
      } else {
        setBalance(amount)
      }
    })
    setAmountDetails(notes_detail.reverse())
  }

  return (
    <div className='App'>
      <div>
        <div>
          <AtmDisplay
            amount={amount}
            handleAmountChange={handleAmountChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div>
          <AtmTotal amountDetails={amountDetails} balance={balance} />
        </div>
      </div>
    </div>
  )
}

export default App

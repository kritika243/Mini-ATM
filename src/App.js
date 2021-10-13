import React, { useState } from 'react'
import AtmDisplay from './AtmDisplay'
import AtmTotal from './AtmTotal'
import './App.css'

function App() {
  let [amount, setAmount] = useState(0)
  const [amountDetails, setAmountDetails] = useState(null)
  const [balance, setBalance] = useState(0)

  let deno = [2000, 500, 200, 100]
  let n = deno.length
  let noteCounter = Array(3).fill(0)

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }
  // const handleSubmit = () => {
  //   let notes_detail = []
  //   function getNoteCount(a, n) {
  //     let note = Math.floor(a / n)
  //     amount = a % n
  //     notes_detail.push([n, note])
  //   }
  //   notes.forEach((note) => {
  //     if (amount >= note) {
  //       getNoteCount(amount, note)
  //       setBalance(amount)
  //     } else {
  //       setBalance(amount)
  //     }
  //   })
  //   setAmountDetails(notes_detail.reverse())
  // }

  // function handleSubmit() {
  //   for (let i = 0; i < 9; i++) {
  //     if (amount >= deno[i]) {
  //       noteCounter[i] = Math.floor(amount / deno[i])
  //       amount = amount - noteCounter[i] * deno[i]
  //     }
  //   }

  //   // Printing notes
  //   document.write('Currency Count ->' + '<br/>')
  //   for (let i = 0; i < 9; i++) {
  //     if (noteCounter[i] != 0) {
  //       document.write(deno[i] + ' : ' + noteCounter[i] + '<br/>')
  //     }
  //   }
  // }

  function handleSubmit() {
    var balance = {}
    let forCal = [800, 300, 100, 0]
    let idx = deno.findIndex((val) => {
      return val < amount
    })
    let ans1, ans2
    for (let i = idx; i < n; i++) {
      ans1 = Math.floor(amount / deno[i])
      ans2 = amount - ans1 * deno[i]
      if (ans2 >= forCal[i]) ans2 = ans1
      else ans2 = ans1 - 1

      ans1 = ans2
      amount -= deno[i] * ans1
      balance[deno[i]] = ans1
    }
    console.log(balance)
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
          {/* <AtmTotal amountDetails={amountDetails} balance={balance} /> */}
        </div>
      </div>
    </div>
  )
}

export default App

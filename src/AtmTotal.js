import React from 'react'
import './App.css'

function AtmTotal({ amountDetails, balance }) {
  const getTotalNotes = (amt) => {
    let notes = 0
    amt.forEach((item) => {
      notes = notes + item[1]
    })
    return notes
  }
  return (
    <div>
      <h3>Amount Details</h3>
      {amountDetails && (
        <>
          <div>
            {amountDetails.map((note, index) => (
              <div key={index}>{`${note[1]} notes of Rs.${note[0]}`}</div>
            ))}
          </div>
          <br /> <br />
          <div>
            <strong>Remaining: {balance} Rs</strong>
            <br /> <br />
            <strong>
              Toatl Notes Withdrwan: {getTotalNotes(amountDetails)}
            </strong>
          </div>
        </>
      )}
    </div>
  )
}

export default AtmTotal

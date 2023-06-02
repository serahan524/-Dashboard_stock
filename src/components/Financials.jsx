import React from 'react'

const Financials = ({companyinfo}) => {
  return (
    <div>
        <h1>Financials</h1>
        <br></br>
        <h3>value: ${companyinfo.value.toFixed(2)}</h3>
        <h3>close: ${companyinfo.close.toFixed(2)}</h3>
    </div>
  )
}

export default Financials
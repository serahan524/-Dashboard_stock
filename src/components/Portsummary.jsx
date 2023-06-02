import React from 'react';

const Portsummary = ({portfolios}) => {

    /* Total value of portfolio*/
    function sumVal() {
        let sumval = 0;
        for (let item of portfolios) {
            sumval += item.value
        }
        return sumval.toFixed(2);
    };

    /* Total number of portfolio */
    function sumNum() {
        let sumnum = 0;
        for (let item of portfolios) {
            sumnum += item.amount
        }
        return sumnum;
    }

  return (
    <div>
        <h3>Summary</h3>
        <div>Total current value: {sumVal()}</div>
        <div>Number items: {portfolios.length} </div>
        <div>Total number of stocks: {sumNum()}</div>
    </div>
  )
}

export default Portsummary;
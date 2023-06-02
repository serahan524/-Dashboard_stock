import React from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

const Linehighlow = ({financials}) => {

    for (let i = 0; i < financials.length; i++) {
        financials[i].high = 1*financials[i].high;
        financials[i].low = 1*financials[i].low;
      }
    
  return (
    <>
        <h2>Daily High Low</h2>
        <br></br>
        <ResponsiveContainer width="100%" height="75%" >
            <LineChart data={financials} margin={{ right: 50 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="high"
                    stroke="#6AB187" dot={false} />
                <Line dataKey="low"
                    stroke="#D32D41" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    </>
  )
}

export default Linehighlow;
import React from 'react'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';


const Linevolume = ({financials}) => {

  for (let i = 0; i < financials.length; i++) {
    financials[i].volume = 1*financials[i].volume;
  }

  return (
    <>
        <h2>Daily Volume</h2>
        <br></br>
        <ResponsiveContainer width="100%" height="75%">
            <LineChart data={financials} margin={{ left: 20, right: 50 }}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="date" />
                <YAxis type="number" name="Value($)"></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="volume"
                    stroke="#6AB187" dot={false}/>

            </LineChart>
        </ResponsiveContainer>
    </>
  )
}
export default Linevolume
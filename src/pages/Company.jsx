import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import Companydetails from '../components/Companydetails';
import Financials from '../components/Financials';
import Linehighlow from '../components/Linehighlow';
import Linevolume from '../components/Linevolume';

const API_URL = 'https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php'

const Company = ({props}) => {
  const location = useLocation();
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}?symbol=${location.state.data.symbol}`).then((data) => data.json()).then((val) => setFinancials(val))
  }, [location.state.data]);

  return (
    <div>
      <h1 className='homebar'>{location.state.data.name}</h1>
      <div className='wrapper'>
        <div className='profile'>
          <Companydetails companyinfo= {location.state.data} />
        </div>
        <div className='contentd'>
          <Financials companyinfo= {location.state.data} />
        </div>
        <div className='graph1'>
          <Linehighlow financials = {financials} />
        </div>
        <div className='graph2'>
          <Linevolume financials = {financials} />
        </div>
      </div>
    </div>
    
  )
}

export default Company
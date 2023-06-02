import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Clientinfo from '../components/Clientinfo';
import Portfolio from '../components/Portfolio';
import Portsummary from '../components/Portsummary';
import Stocklogo from '../components/Stocklogo';

const API_URL = 'https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php'

const Client = (props) => {
  const [portfolios, setPortfolio] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`${API_URL}?id=${location.state.data.id}`).then((data) => data.json()).then((val) => setPortfolio(val))
  }, [location.state.data.id]);

  
  return (
    <div>
      <div className='homebar'>{location.state.data.firstname} {location.state.data.lastname}</div>
      <div className='wrapper'>
      <div className='profile'> 
        <Clientinfo client = {location.state.data} />  
      </div>
      <div className='symbols'>
        <Stocklogo portfolios = {portfolios} />
      </div>
      <div className='table'>     
        <Portfolio portfolios = {portfolios} />      
      </div>
      <div className='contentd'>
        <Portsummary portfolios= {portfolios} />
      </div>
      </div>
    </div>
  )
}

export default Client;
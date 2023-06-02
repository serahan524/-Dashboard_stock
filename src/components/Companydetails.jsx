import React from 'react';

const Companydetails = ({companyinfo}) => {
  return (
    <div>
        <div className='image'>
          <img src='https://via.placeholder.com/100' alt='companyinfo.symbol' />
        </div>
        <h2> {companyinfo.symbol}</h2> 
        <br></br>    
        <h3> {companyinfo.name}</h3>
              
    </div>
  )
}

export default Companydetails;
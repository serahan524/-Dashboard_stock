import React from 'react';

const Clientinfo = ({client}) => {
  return (
    <div>
      <div className='image'>
          <img src='https://via.placeholder.com/100' alt={client.lastname}/>
      </div>
      <div>
          <h3>{client.lastname}, {client.firstname}</h3>
      </div>
      <div>
          <div>{client.email}</div>
          <div>{client.city}</div>
          <div>{client.country}</div>
      </div>
  </div>
    )
}

export default Clientinfo

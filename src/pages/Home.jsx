import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const API_URL = 'https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php'

const Home = () => {
  const [values, setValues] = useState([]);
  const [options, setOptions] = useState();

  useEffect(() => {
    fetch(API_URL).then((data) => data.json()).then((val) => setValues(val))
  }, []);


  /* Function to find out index number of selected value from dropdown */
   function SearchClients() {
    for (let i=0; i<values.length; i++){    
      if (parseInt(options) === values[i].id){      
        return i;
      };
    };
  };
  
  return (
    <div>
      <div className="homebar">HOME</div>
      <div className='backscreen'>
            
        <select id="dropdown" className='dropdown' value={options} onChange = {(e) => setOptions(e.target.value)}>
          <option>please select name</option>
        {
          values.map((clients) => <option key={clients.id} value={clients.id}> 
          {clients.lastname}, {clients.firstname}</option>)
        }
        </select>
        <br></br>
    
        <Link to='/client' state={{data: values[SearchClients()]}}>
          <Button variant="info" className='homebutton'>Go</Button>
        </Link>
      </div>
    </div>
    
  );
};

export default Home;
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Stocklogo = ({portfolios}) => {

    let sortedportfolio = portfolios.sort(({value:a}, {value:b}) => b-a);
    let slicedportfolio = sortedportfolio.slice(0,3);
   
  return (
    <div>    
      {slicedportfolio.map((portfolio) => {
        return(
            <Link to='/company' state={{data: portfolio}}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="outline-info" size="lg">
                <div>{portfolio.symbol}</div>
                <div>{portfolio.value.toFixed(2)}</div>                          
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            </Link>    
        )
      })}  
    </div>
  )
}

export default Stocklogo;
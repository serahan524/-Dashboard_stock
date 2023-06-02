import React from 'react';
import Table from 'react-bootstrap/Table'; 
import { useNavigate } from 'react-router-dom';


const Portfolio = ({portfolios}) => {
    const navigate = useNavigate();

    /* To calculate total value of current portfolio*/
    function sumArr() {
        let sum = 0;
        let times = 0;

        for (let item of portfolios){
            times = item.amount * item.value;
            sum += times;
        }
        return sum;
    }

    /* Create clickable table */
    function handleRowClick(portfolio) {
        navigate('/company', {state: {data: portfolio}});
    }
  
    /* will render a table*/
    return (                
        <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Current Value</th>
                </tr>
            </thead>    
            <tbody>               
                {portfolios.map((portfolio) => {   
                    return(
                        <tr onClick={(e) => handleRowClick(portfolio)}> 
                            <td>{portfolio.symbol}</td>
                            <td>{portfolio.name}</td>
                            <td>{portfolio.value}</td>
                        </tr>                    
                    )
                })}
                <tr>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td>Total value</td>
                    <td colSpan={2}>{sumArr()}</td>
                </tr>                       
            </tbody> 
        </Table>        
    );
}

export default Portfolio;
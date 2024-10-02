import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import Chart from '../Chart/Chart'
import {dollar} from "../utils/icons"
import { UseGlobalcontext } from '../../context/Globalcontext'

export default function Dashboard() {
  const {Totalincome,TotaExpense,Getincome,GetExpense} =UseGlobalcontext()
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Getincome();
        await GetExpense();
      } catch (error) {
        console.error("Error fetching income and expense data:", error);
      }
    };
  
    fetchData()
  }, [GetExpense,Getincome]);
  return (
 <Dashboadrstyle>
  <InnerLayout>
  <h1 style={{
    fontWeight: 'bold',
    textAlign: 'center', // Center text horizontally
    margin: '0 auto',    // Center block element
    display: 'flex',      // Flexbox for vertical centering
    justifyContent: 'center',
    alignItems: 'center',
}}>
    All transactions
</h1>
   
    <div className="stats-con">
      <div className="chart-con">
      <Chart/>
       <div className="amount-con" style={{margin:'20px'}}>
        <div className="income">
       <h2>Total income</h2>
       <p style={{color:'green'}}>{dollar}{Totalincome()}</p>
        </div>
        <div className="expense">
       <h2>Total Expenses</h2>
       <p style={{color:'red'}}>{dollar}{TotaExpense()}</p>
        </div>
       </div>
               <div className="balance"  >
       <h2>Total Expenses</h2>
       <p style={{color:'orange'}}>{dollar}{Totalincome()-TotaExpense()}</p>
        </div>
        <div></div>
      </div>
    </div>
  </InnerLayout>
 </Dashboadrstyle>
  )
}
const Dashboadrstyle = styled.div`
    .stats-con {
        display: grid;
        grid-template-columns: 1fr 2fr; 
        gap: 2.5rem;
        margin-top: 2rem;

        .chart-con {
            grid-column: 1 / 3;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            height: 500px;
            background: #f4f4f4; /* Add a background for contrast */
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);

            .amount-con {
                display: flex;
                justify-content: space-between;
                margin-top: 2rem;

                .income, .expense, .balance {
                    background: #fff;
                    border: 1px solid #eaeaea;
                    border-radius: 15px;
                    padding: 1.5rem 2rem;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    width: 30%;
                    
                    h2 {
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                        color: #333;
                    }

                    p {
                        font-size: 2.5rem;
                        font-weight: 600;
                    }
                }

                .income p {
                    color: green;
                }

                .expense p {
                    color: red;
                }

                .balance p {
                    color: orange;
                    
                }
            }

            .balance {
                margin-top: 1rem;
                padding: 1rem;
                background: #fcf6f9;
                border: 2px solid #fff;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                border-radius: 20px;
                margin-bottom: 2rem;
                p {
                    color: orange;
                    font-size: 4.5rem;
                    opacity: 0.9;
                }
            }
        }

        .history-con {
            grid-column: 4 / -1;
            h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
                color: #333;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .salary-item {
                background: #fff;
                border: 1px solid #eaeaea;
                border-radius: 15px;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                margin-bottom: 1rem;

                p {
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

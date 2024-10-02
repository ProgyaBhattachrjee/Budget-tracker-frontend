import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import Form from '../Form/Form'
import { UseGlobalcontext } from '../../context/Globalcontext'
import IncomeItem from '../IncomeItem/IncomeItem'
export default function Income() {
  
   const {Getincome,income,DeleteIncome,Totalincome} = UseGlobalcontext()
   useEffect(()=>{
    Getincome()
   },[income,Getincome])
   if(income == null){
    return <h1>loading</h1>
   }
  return (
<IncomeStyle>
 <InnerLayout>
 <h1 style={{
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center', // Center text horizontally
    margin: '0 auto',    // Center block element
    display: 'flex',      // Flexbox for vertical centering
    justifyContent: 'center',
    alignItems: 'center',
}}>
    Income
</h1>

  <h2 className="total-income">Total Income: <span>${Totalincome()}</span></h2>
  <div className="income-content">
    <div className="form-container">
      <div className="incomes">
         <Form/>
      </div>
    </div>
    <div className="incomes">
                        {income.map((income) => {
                           return <IncomeItem  title={income.title}  amount={income.amount} date={income.date}
                           key={income.id}
                           id={income.id}
                           category={income.category}
                           description={income.description}
                           type={income.type}
                           indicatorColor="green"
                           deleteItem={DeleteIncome}
                           />
                        })}
                    </div>
  </div>
 </InnerLayout>
</IncomeStyle>
  )
}
const IncomeStyle = styled.div`
    display: flex;
    overflow: auto;
    
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
            color: green
        }
       
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
    /* styles.css */
.bold-green {
    font-weight: bold;
    color: green; /* Or use a specific green color code */
}

`
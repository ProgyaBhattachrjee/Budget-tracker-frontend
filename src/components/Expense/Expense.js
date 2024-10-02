import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import { UseGlobalcontext } from '../../context/Globalcontext'
import IncomeItem from '../IncomeItem/IncomeItem'
import ExpenseForm from './ExpenseForm'
export default function Expense() {
  
   const {GetExpense,expense,DeleteExpense,TotaExpense} = UseGlobalcontext()
   useEffect(()=>{
    GetExpense()
   },[expense,GetExpense])
  return (
<ExpenseStyled>
 <InnerLayout>
 <h1 style={{
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center', // Center text horizontally
    margin: '0 auto',    // Center block element
    display: 'flex',      // Flexbox for vertical centering
    justifyContent: 'center',
    alignItems: 'center',
  
}}>
  Expense
</h1>
  <h2 className="total-income">Total Income: <span>${TotaExpense()}</span></h2>
  <div className="income-content">
    <div className="form-container">
      <div className="incomes">
         <ExpenseForm/>
      </div>
    </div>
    <div className="incomes">
                        {expense.map((income) => {
                           return <IncomeItem  title={income.title}  amount={income.amount} date={income.date}
                           key={income.id}
                           id={income.id}
                           category={income.category}
                           description={income.description}
                           type={income.type}
                           deleteItem={DeleteExpense}
                           indicatorColor="red"
                           />
                        })}
                    </div>
  </div>
 </InnerLayout>
</ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
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
            color: red;
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`;


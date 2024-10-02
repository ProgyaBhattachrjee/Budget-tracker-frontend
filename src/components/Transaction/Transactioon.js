import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import { UseGlobalcontext } from '../../context/Globalcontext'

export default function Transactioon() {
  const {transactionHistory} = UseGlobalcontext()
  const [...history] = transactionHistory()
  return (
<TransactionStyle>
  <InnerLayout>
  <h1 style={{
    fontWeight: 'bold',
    textAlign: 'center', // Center text horizontally
    margin: '0 auto',    // Center block element
    display: 'flex',      // Flexbox for vertical centering
    justifyContent: 'center',
    alignItems: 'center',
}}>
    Recent History
</h1>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
  </InnerLayout>
</TransactionStyle>
  )
}
const TransactionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Increased gap for better spacing between items */

  .history-item {
    background: #ffffff; /* Soft white background for a cleaner look */
    border: 2px solid #f0f0f0; /* Softer border color for a modern touch */
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1); /* Deeper shadow for a more elegant feel */
    padding: 1.5rem; /* Increased padding for a more spacious feel */
    border-radius: 15px; /* Slightly reduced border radius for a modern look */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem; /* Reduced margin for better alignment with other elements */
    transition: box-shadow 0.3s ease; /* Smooth transition for hover effects */

    &:hover {
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15); /* Shadow on hover for depth */
    }

    /* Optional: Add a transition for a subtle background color change */
    &:hover {
      background: #f9f9f9; /* Light background change on hover for interactivity */
    }
  }
`;

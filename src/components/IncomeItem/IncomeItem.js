import React from 'react'
import styled from 'styled-components';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../utils/icons';
import Button from '../Button/Button';
import {dateFormat } from '../utils/dataformat'
export default function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return  card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

  return (
   <IncomeItemStyled indicator={indicatorColor}>
    <div className='icon'>
    {type === 'expense' ? expenseCatIcon() : categoryIcon()}
    </div>
    <div className="content">
      <h5>{title}</h5>
      <div className="inner-content">
        <div className="text">
            <p>{dollar}{amount}</p>
            <p>{calender} {dateFormat(date)}</p>
            <p>
                {comment}
                {description}
            </p>
            <div className="btn-con">
            <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'white'}
                            hColor={'var(--color-green)'}
                            onClick={()=>deleteItem(title)}
                        />
            </div>
        </div>
      </div>
    </div>
   </IncomeItemStyled>
  )
}
const IncomeItemStyled = styled.div`
    background: #ffffff; /* Soft white background */
    border: 2px solid #f0f0f0; /* Softer border color */
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1); /* Slightly deeper shadow for elegance */
    border-radius: 15px; /* Slightly reduced border radius for a modern look */
    padding: 1.5rem; /* Increased padding for a more spacious feel */
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem; /* Increased gap for better spacing */
    width: 100%;
    color: #222260;

    .icon {
        width: 80px;
        height: 80px;
        border-radius: 15px; /* Reduced border radius to match the card */
        background: #f9f9f9; /* Softer background for the icon */
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #e0e0e0; /* Softer border for the icon */
        transition: box-shadow 0.3s ease;

        &:hover {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Shadow on hover for depth */
        }

        i {
            font-size: 2.6rem;
            color: #6c5ce7; /* A touch of color for the icon */
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem; /* Increased gap for readability */

        h5 {
            font-size: 1.4rem; /* Slightly larger font size for headings */
            padding-left: 2rem;
            position: relative;
            color: #222260;

            &::before {
                content: '';
                position: absolute;
                left: -1rem; /* Adjusted for better spacing */
                top: 50%;
                transform: translateY(-50%);
                width: 1rem; /* Slightly larger dot for visibility */
                height: 1rem; /* Slightly larger dot for visibility */
                border-radius: 50%;
                background: ${({ indicator }) => indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .text {
                display: flex;
                align-items: center;
                gap: 1.5rem;

                p {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.9; /* Slightly increased opacity for better visibility */
                    font-size: 0.9rem; /* Reduced font size for secondary text */
                }
            }
        }
    }
`;


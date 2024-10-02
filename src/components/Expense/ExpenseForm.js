import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { plus } from '../utils/icons';
import { UseGlobalcontext } from '../../context/Globalcontext';


function ExpenseForm() {
    const {AddExpense} = UseGlobalcontext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
         AddExpense(inputState)
       //console.log(inputState)
       window.location.reload()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
            <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <button className='b' type='submit'>
                {plus}
                Add Expense</button>
</div>

        </ExpenseFormStyled>
    )
}


const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input,
    textarea,
    select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: 0.75rem 1.25rem; /* Increased padding for comfort */
        border-radius: 10px; /* Softer, more rounded corners */
        border: 2px solid #e0e0e0; /* Light gray border for elegance */
        background: #ffffff; /* White background for inputs */
        resize: none;
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1); /* Softer shadow for depth */
        color: rgba(34, 34, 96, 0.9);

        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }

        &:focus {
            border-color: #6c5ce7; /* Highlight border color on focus */
            box-shadow: 0px 0px 5px rgba(108, 92, 238, 0.5); /* Light shadow on focus */
        }
    }

    .input-control {
        input {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;

        select {
            color: rgba(34, 34, 96, 0.4);
            border: 2px solid #e0e0e0; /* Same border for consistency */
            border-radius: 10px; /* Matching border radius */
            padding: 0.75rem 1.25rem; /* Matching padding for consistency */

            &:focus,
            &:active {
                color: rgba(34, 34, 96, 1);
                border-color: #6c5ce7; /* Highlight border on focus */
                box-shadow: 0px 0px 5px rgba(108, 92, 238, 0.5); /* Light shadow on focus */
            }
        }
    }

    .submit-btn {
        .b {
            display: flex;
            gap: 10px;
            background: var(--color-accent, #6c5ce7); /* Deep purple background */
            color: white;
            padding: 1rem 2rem; /* Increased padding for a larger button */
            border: none;
            border-radius: 30px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

            &:hover {
                background-color: var(--color-deep, #4e54c8); /* Darker shade on hover */
                box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
                transform: translateY(-3px);
            }

            &:active {
                transform: translateY(0);
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            }
        }
    }
`;

export default ExpenseForm
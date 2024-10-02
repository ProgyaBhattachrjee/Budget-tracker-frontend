import axios from 'axios'
import React from 'react'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
const Globalcontext = React.createContext()
const BaseUrl = "https://budget-tracker-backend-xvxk.onrender.com"
export const GlobalProvide = ({children})=> {
    const [income,setincome] = useState([])
    const [expense,setexpense] = useState([])
    const [error,seterror] = useState(null)

    const Addincome = async(incomes) =>{
        const response = await axios.post(`${BaseUrl}add-income`,incomes).catch((err)=> {
            seterror(err.response.data.message)
            console.log("error in add-income")})
            console.log(response)
          
    }
    const Getincome = async()=>{
        const response = await axios.get(`${BaseUrl}get-income`).catch((err)=> {
            seterror(err.response.data.message)
            console.log("error in get-income")})
        setincome(response.data);    
    }
    const DeleteIncome = async (title) => {
        try {
            const response = await axios.delete(`${BaseUrl}delete-income/${title}`);
            toast.success(`income with title: ${title} has been deleted.`)
            console.log(response)
            console.log(error);
       
        } catch (error) {
            toast.error("Error deleting income:");
            alert(error.response.data.message);
        }
    };

    const Totalincome = ()=>{
        let t =0;
        income.forEach((incomes)=>{
            t+= incomes.amount;
        })
    return t;
    }

    
    const AddExpense = async(expenses) =>{
        const response = await axios.post(`${BaseUrl}add-expense`,expenses).catch((err)=> {
            seterror(err.response.data.message)
            toast.error("error in add-expense")})
            console.log(response)
    }
    const GetExpense = async()=>{
        const response = await axios.get(`${BaseUrl}get-expense`).catch((err)=> {
            seterror(err.response.data.message)
            toast.error("error in get-expense")})
        setexpense(response.data)  
    }
    const DeleteExpense = async (title) => {
        try {
            const response = await axios.delete(`${BaseUrl}delete-expense/${title}`);
            toast.success(`expense with title: ${title} has been deleted.`)
            console.log(response)
       
        } catch (error) {
            toast.error("Error deleting income:");
         
        }
    };

    const TotaExpense = ()=>{
        let t =0;
        expense.forEach((incomes)=>{
            t+= incomes.amount;
        })
    return t;
    }
    const transactionHistory = ()=>{
        const history = [...income, ...expense]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history
    }
    return (
   <Globalcontext.Provider value={{Addincome,Getincome,income,DeleteIncome,Totalincome,AddExpense,GetExpense,expense,DeleteExpense,TotaExpense,transactionHistory}} >
            {children}
        </Globalcontext.Provider>
    )
}
export const UseGlobalcontext = ()=>{
    return useContext(Globalcontext)
}
import { useContext, useState } from "react"
import { ExpensesContext } from "../../ExpensesContext"

export const NewExpense = (props) => {
    const { expenses, setExpenses, setFilteredYear } = useContext(ExpensesContext)
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })
    const changeTitle = (e) => {
        setUserInput((prevInput) => {
            return {
                ...userInput,
                title: e.target.value
            }
        })
    }
    const changeAmount = (e) => {
        setUserInput((prevInput) => {
            return {
                ...userInput,
                amount: e.target.value
            }
        })
    }
    const changeDate = (e) => {
        setUserInput((prevInput) => {
            return {
                ...userInput,
                date: e.target.value
            }
        })
    }

    const addNewExpence = (e) => {
        e.preventDefault()
        const year = userInput.date.slice(0, 4)
        const _expenses = { ...expenses }
        /* format in localstorage
        const Expenses = {
        2002: [{
            title: 'subkhir',
            amount: '123',
            date: ''
            }],
        2003: [{
            title: '',
            amount: '',
            date: ''
            }]
        } */
        if (!(_expenses[year])) {
            _expenses[year] = [{
                id: Date.now(),
                title: userInput.title,
                amount: userInput.amount,
                date: userInput.date
            }]
        } else {
            _expenses[year].push({
                id: Date.now(),//just to generate random ids
                title: userInput.title,
                amount: userInput.amount,
                date: userInput.date
            })
        }
        const _userInput = {
            title: '',
            amount: '',
            date: ''
        }
        setUserInput(_userInput)
        setExpenses(_expenses)
        setFilteredYear(year)
        props.changeEditMode()
    }

    return (
        <div >
            <form id="form" onSubmit={addNewExpence} className="container mx-auto pt-8 pb-5 pl-12 border-white border-2 rounded-3xl bg-gray-800 flex flex-col justify-around gap-5 text-white">
                <div>
                    <label className=" font-medium">Title</label>
                    <input className="ml-12 w-1/2 text-black rounded-lg text-center py-1" onChange={changeTitle} type={'text'} required />
                </div>
                <div>
                    <label className=" font-medium">Amount</label>
                    <input className="ml-6 w-1/2 text-black border  rounded-lg text-center py-1" type={'number'} onChange={changeAmount} min={1} step={1} required />
                </div>
                <div>
                    <label className=" font-medium">Date</label>
                    <input className="ml-12 w-1/2 text-black rounded-lg text-center py-1" type={'date'} min='2021-01-01' max='2023-12-31' onChange={changeDate} required />
                </div>
                <div className=" text-center">
                    <button type="submit" onClick={props.changeEditMode} className="bg-rose-900 px-4 py-1 text-white font-semibold border rounded-lg mx-4" >Cancel</button>
                    <button type="submit" className="bg-rose-900 px-4 py-1 text-white font-semibold border rounded-lg" >Add Expense</button>
                </div>
            </form >
        </div >
    )
}
import { ExpenseDate } from "./ExpenseDate"

export const ExpenseItem = (props) => {
    const Expense = props.Expense

    return (
        <div className=" border-black p-3 border-2 rounded-xl flex justify-between bg-gray-500" >
            <div className="flex items-center gap-10">
                {<ExpenseDate date={Expense.date} />}
                <h1 className="font-extrabold text-white text-lg">{Expense.title}</h1>
            </div>
            <div className="flex items-center">
                <button className="bg-rose-900 px-4 py-1 text-white font-semibold border rounded-lg">₹ {Expense.amount}</button>
            </div>
        </div>


    )
}

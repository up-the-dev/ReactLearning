import { useState } from "react"
import { NewExpense } from "../Components/AddExpense/NewExpense"
import { Expenses } from "../Components/ExpensesCart/Expenses"

export const Home = () => {
    const [isEditing, setIsEditing] = useState(false)
    const changeEditMode = () => {
        const _isEditing = isEditing;
        setIsEditing(!_isEditing)
    }
    return (
        <div className="bg-gray-500 flex flex-col gap-6 items-center justify-center py-10 min-h-screen">
            {
                isEditing ? <NewExpense changeEditMode={changeEditMode} /> : <button className="bg-rose-900 px-4 py-1 text-white font-semibold border rounded-lg mx-4" onClick={changeEditMode}>Add New Expense</button>
            }
            <Expenses />
        </div>
    )
}

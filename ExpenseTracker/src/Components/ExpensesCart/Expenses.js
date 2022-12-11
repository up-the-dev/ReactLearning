import { useContext } from "react";
import { ExpensesContext } from "../../ExpensesContext";
import { ExpensesFilter } from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem"
import ExpensesChart from "./ExpensesChart"

export const Expenses = () => {
    const { expenses, filteredYear } = useContext(ExpensesContext)
    const filterExpense = Object.entries(expenses).filter((Exp) => {
        if (filteredYear === '') {
            return true
        }
        return Exp[0].toString() === filteredYear
    })
    return (
        <div className=" container mx-auto w-2/3 py-7 px-20 border-white border rounded-3xl bg-gray-800 flex flex-col justify-around gap-5">
            <ExpensesFilter />
            {filteredYear === '' ? '' :
                filterExpense.map((exp) => {
                    return <ExpensesChart key={exp[0]} expenses={exp[1]} />
                })
            }
            {filterExpense.length === 0 ?
                <p className="text-center text-white text-xl font-semibold">No Expenses Found !  Please Add first</p> :
                filterExpense.map((Exp) => {
                    return Exp[1].map((e) => {
                        return < ExpenseItem key={e.id} Expense={e} />;
                    })
                })
            }
        </div>
    )
}
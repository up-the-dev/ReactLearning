import { useContext } from "react";
import { ExpensesContext } from "../../ExpensesContext";

export const ExpensesFilter = () => {
    const { setFilteredYear } = useContext(ExpensesContext)
    const filterExpenseByYear = (e) => {
        const year = e.target.value
        if (year === 'filter by year') {
            setFilteredYear('')
            return
        }
        setFilteredYear(`${year}`)
    }

    return (
        <div className='p-3 text-right'>
            <select onChange={filterExpenseByYear} id='select' className="py-1 px-5 rounded-xl font-medium border-2 border-rose-900 text-center">
                <option className="bg-gray-400">filter by year</option>
                <option value='2023' className="bg-gray-400">2023</option>
                <option value='2022' className="bg-gray-400">2022</option>
                <option value='2021' className="bg-gray-400">2021</option>
            </select>
        </div>
    );
};
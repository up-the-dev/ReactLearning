export const ExpenseDate = (props) => {
    const date = props.date
    const dateSeparated = date.split('-')
    const monthNumber = dateSeparated[1]
    const day = dateSeparated[2];
    const year = dateSeparated[0];

    function getMonth(monthNumber) {
        const date1 = new Date();
        date1.setMonth(monthNumber - 1);
        const formatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
        const firstMonth = formatter.format(date1);
        return `${firstMonth}`;
    }

    return (
        <div className="py-1 px-3 border rounded-lg flex flex-col items-center text-white bg-gray-800">
            <h1 className="text-sm  font-extrabold">{getMonth(monthNumber)}</h1>
            <h1 className="text-xs">{year}</h1>
            <h1 className="text-xl font-extrabold">{day}</h1>
        </div>
    )
}

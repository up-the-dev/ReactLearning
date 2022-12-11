const ChartBar = (props) => {
    let barFillHeight = '0%';
    if (props.value > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='h-full flex flex-col items-center'>
            <div className='h-full w-full border border-solid border-black rounded-md bg-pink-300 overflow-hidden flex flex-col justify-end'>
                <div
                    className='bg-rose-900 w-full transition-all duration-300 ease-out'
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className='font-bold text-sm text-center'>{props.label}</div>
        </div>
    );
};

export default ChartBar;
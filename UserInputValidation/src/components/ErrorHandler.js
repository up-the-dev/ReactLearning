import { useContext } from "react"
import { UsersContext } from "../UsersContext"

export const ErrorHandler = (props) => {
    const { setIsError } = useContext(UsersContext)
    const closeErr = () => {
        setIsError(false)
    }
    return (
        <div className="fixed w-screen  h-screen z-10 bg-black bg-opacity-80 bg-transparent top-0 left-0 flex justify-center items-center">
            <div className="z-50 overflow-hidden border border-white bg-white w-2/6 ">
                <h1 className="text-white bg-red-900 p-2 text-2xl font-bold ">
                    {props.title}
                </h1>
                <div className="px-6 pb-10 pt-2 mt-2">
                    <h1 className=" text-sm">
                        {props.msg}
                    </h1>
                    <button className="bg-red-900 text-white float-right py-1 px-2 rounded mt-8 mb-2 text-xs font-bold" onClick={closeErr}>Close</button>
                </div>

            </div>

        </div>

    )
}
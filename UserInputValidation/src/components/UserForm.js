import { useContext } from "react"
import { UsersContext } from "../UsersContext"
import { ErrorHandler } from "./ErrorHandler"

export const UserForm = () => {
    const { users, setUsers, isError, setIsError } = useContext(UsersContext)
    const addUser = (e) => {
        e.preventDefault()
        const userName = e.target[0].value
        const age = e.target[1].value
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setIsError({
                err: "Invalid input",
                msg: "Please enter valid age and name !"
            })
            return
        }
        if (age <= 0) {
            setIsError({
                err: "Invalid input",
                msg: "Please enter valid age ! age should be greater than 1 !"
            })
            return
        }
        /*format in localstorage:
        users=[
            {userName:"",
            age: ,
            }
        ]
        */
        const user = { ...users }
        if (!(user[userName])) {
            user[userName] = {
                age
            }
        } else {
            //logic for same user already exist
            setIsError({
                err: "Already exist",
                msg: "same user already exist !"
            })
            return
        }
        setUsers(user)
    }
    return (
        <>
            {isError && <div className="w-full h-full m-0">
                <ErrorHandler title={isError.err} msg={isError.msg} />
            </div>}
            <div className="py-4 px-7 bg-gray-300 rounded-lg w-1/2 text-black font-light border border-black">

                <form className=" space-y-4" onSubmit={addUser}>
                    <div>
                        <h1 className="mb-1">UserName</h1>
                        <input className=" border border-black w-full" type={"text"} name="userName" />
                    </div>
                    <div>
                        <h1 className="mb-1">Age(Years)</h1>
                        <input className=" border border-black w-full" type={"number"} name='age' />
                    </div>

                    <button type={"submit"} className="block bg-purple-900 text-white font-bold px-2 py-1" >Submit</button>
                </form>
            </div>
        </>

    )
}
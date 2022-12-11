import { useContext } from "react"
import { UsersContext } from "../UsersContext"

export const UsersList = () => {
    const { users } = useContext(UsersContext)
    return (
        <div className="py-4 px-7 bg-gray-300 rounded-lg w-1/2 text-black font-normal border border-black">
            <ul>
                {Object.keys(users).length === 0 ?
                    <h1>
                        User data not available
                    </h1>
                    :
                    Object.keys(users).map((user) => {
                        return <li key={user + users[user].age} className="border border-gray-500 py-1 px-3 mb-2">{user} {users[user].age + ' years old'}</li>
                    })}

            </ul>
        </div>
    )
}
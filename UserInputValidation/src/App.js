import { useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

function App() {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || {}
  })
  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(users))
  }, [users])
  const [isError, setIsError] = useState()

  return (
    <UsersContext.Provider value={{ users, setUsers, isError, setIsError }}>
      <div className=" h-screen flex justify-center items-center bg-gray-200">
        <div className="w-full h-4/5 flex flex-col items-center space-y-10">
          <UserForm />
          <UsersList />
        </div>
      </div>
    </UsersContext.Provider>
  );
}

export default App;

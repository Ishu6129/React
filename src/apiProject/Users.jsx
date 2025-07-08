import React, { useEffect, useState } from 'react'
import User from './user'

const Users = () => {
    const [users, setUsers] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchUsers(){
            setIsLoading(true);
            const response = await fetch('https://api.github.com/users')
            const data = await response.json()
            console.log(data)
            setUsers(data)
            setIsLoading(false);
        }
        fetchUsers()
    }, [])
    if (isLoading) {
        return <div>Loading...</div>
    }
  return (
    <section>
        <div style={{display:"flex",alignItems:"center",flexWrap:"wrap", justifyContent:"center"}}>
            {users.map((user) => (
                <User key={user.id} avatar_url={user.avatar_url} login={user.login}/>)
            )}
            </div>
        </section>
  )
}

export default Users
import { useState, useEffect } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await window.fetch('/api/users')
            const json = await data.json();
            setUsers(json);
        }

        fetchData();
    }, [])

    return ( 
        <>
        <h1>Les DevOps sont :</h1>
        {users.map(user => (
            <h2 key={user._id}>{user.pseudo}</h2>
        ))}
        </>
     );
}
 
export default Users;
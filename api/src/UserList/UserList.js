import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "../user/User";
export default function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((errors) => console.error(errors));
    }, []);

    return (
        <>
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
        </>
    );
}

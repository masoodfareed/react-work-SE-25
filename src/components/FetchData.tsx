import React, {useEffect, useState} from 'react';

const FetchData = () => {
    interface User {
        id: number;
        name: string;
        email: string;
    }

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response =  await fetch('https://jsonplaceholder.typicode.com/users');
                const data: User[] = await response.json();
                setUsers(data);
            }
            catch(error)
            {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        fetchData();
        },
    []);

    return (
        <>
          <div className='container'>
            <h2 className='mt-4'>Fetched Users</h2>
             <ul>
                {users.map(user => <li key={user.id}>{user.name} - {user.email}</li>)}
                </ul> 
          </div>
        </>
    )
}

export default FetchData;

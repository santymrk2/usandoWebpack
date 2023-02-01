import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetUsers = (API) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try{
                const response = await axios.get(API);
                setUsers(response.data.results[0]);
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, []);

    return users;
}

export default useGetUsers;
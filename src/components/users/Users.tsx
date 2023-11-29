import React, { useContext, useEffect } from 'react';
import './users.css';
import { MainContext } from '../../contexts/MainContext';



export const Users = () => {
    const {users ,setUsers, renderUsers, posts, setPosts,} = useContext(MainContext)!;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])
  return (
    <div>
        {}
    </div>
  )
}

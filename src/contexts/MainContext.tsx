import React, { createContext, PropsWithChildren, useState } from 'react'
import { MainContextInterface, UserInterface, PostInterface } from '../types';



export const MainContext = createContext<MainContextInterface | null>(null);
interface PropsInterface extends PropsWithChildren {
}

const renderUsers = (users: UserInterface[]) => {
    return <div className='main-wrap-users'>
        {users.map((user, i) => <div className='user-card' key={`user${i}`}>
          <p>{user.id}</p>
          <p>Company: {user.company.name}</p>
          <p>{user.name}</p>
          <p>bs: {user.company.bs}</p>
          <p>catch phrase: {user.company.catchPhrase}</p>
          <p>Address:</p>
          <p>city: {user.address.city}</p>
          <p>street: {user.address.street}</p>
          <p>suite: {user.address.suite}</p>
          <p>zip-code: {user.address.zipcode}</p>
          <p>geo-point: lat({user.address.geo.lat}) - lng({user.address.geo.lng})</p>
          <p>phone: {user.phone}</p>
          <p>email: {user.email}</p>
          <p>web-site: {user.website}</p>
          <p>username: {user.username}</p>
        </div>)}
    </div>
}

const renderPosts = (posts: PostInterface[]) => {
  return <div className='main-wrap-posts'>
    {posts.map((post, i) => <div className='post-card'>
      <p>id: {post.id} / user id: {post.userId}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>)}
  </div>
}



export const MainContextProvider = (props: PropsInterface) => {
    const[users, setUsers] = useState<UserInterface[]>([]);
    const[posts, setPosts] = useState<PostInterface[]>([]);


  return (
    <MainContext.Provider
     value={{
        users,
        setUsers,
        renderPosts,
        posts,
        setPosts,
        renderUsers,
     }}
     >
        {props.children}
    </MainContext.Provider>
  )
}

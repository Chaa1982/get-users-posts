import React, { useContext, useEffect, useState } from 'react';
import './postsTheUsers.css';
import { MainContext } from '../../contexts/MainContext';
import { PostInterface } from '../../types';


export const PostsTheUser = () => {
  const[newposts, setNewposts] = useState<PostInterface[]>([]);
  
  const{users, renderUsers, posts, renderPosts} = useContext(MainContext)!;
  
  let indexOut: number;

  const onClickGetPostsTheUsers = (event: any): void => {
    users.forEach((user, i) => {
      console.log(user.name.includes(event.target.innerText), "includes");
      
      if(user.name.includes(event.target.innerText) === true){
        console.log(users[i].id, "<<<user ID");
        
        setNewposts(posts.filter(el => users[i].id === el.userId))
      }
    })
  }

  return (
    <div className='main-wrap-post-the-users'>
      <div className='btn-name-wrap'>
        {users.map((user, i) => 
        <button className='btn-name'  key={`btn-name-${i}`}
          onClick={onClickGetPostsTheUsers}
        >
          {user.name}
        </button>)}
      </div>
        {renderPosts(newposts)}
      
      
    </div>
  )
}

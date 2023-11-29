import React, { useContext, useEffect } from 'react';
import './posts.css';
import { MainContext } from '../../contexts/MainContext';
import { render } from '@testing-library/react';

export const Posts = () => {
  const{posts, setPosts, renderPosts} = useContext(MainContext)!;
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])
  return (
    <div>{}</div>
  )
}

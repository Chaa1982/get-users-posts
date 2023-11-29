import React from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Props } from './components/propses/Props';
import { Users } from './components/users/Users';
import { Posts } from './components/posts/Posts';
import { MainContextProvider } from './contexts/MainContext';
import { PostsTheUser } from './components/postsTheUser/PostsTheUser';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Props
        name={"Andrei"}
        age={41}
        fn={():void => console.log("It`s props function")}
      />
      <MainContextProvider>
        <Users/>
        <Posts/>
        <PostsTheUser/>
      </MainContextProvider>
      
    </div>
  );
}

export default App;

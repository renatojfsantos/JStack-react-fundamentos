import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  const [ posts, setPosts ] = useState([
    { id:Math.random(), title: "Título #01", subtitle:"Subtítulo #01", likes: 20 },
    { id:Math.random(), title: "Título #02", subtitle:"Subtítulo #02", likes: 10 },
    { id:Math.random(), title: "Título #03", subtitle:"Subtítulo #03", likes: 50 },
    { id:Math.random(), title: "Título #04", subtitle:"Subtítulo #03", likes: 50 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título #0${prevState.length + 1}`,
        subtitle: `Subtítulo #0${prevState.length + 1}`,
        likes: 50,
      }
    ]);
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map((post => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      )))}
    </>
  );
}

export default App;
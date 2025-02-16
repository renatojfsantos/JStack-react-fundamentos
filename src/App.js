import React, { useState } from 'react';

import { ThemeProvider } from './ThemeContext'
import Post from './Post';
import Header from './Header';

function App() {
  const [ posts, setPosts ] = useState([
    { id:Math.random(), title: "Título #01", subtitle:"Subtítulo #01", likes: 20, read: false },
    { id:Math.random(), title: "Título #02", subtitle:"Subtítulo #02", likes: 10, read: true },
    { id:Math.random(), title: "Título #03", subtitle:"Subtítulo #03", likes: 50, read: false },
    { id:Math.random(), title: "Título #04", subtitle:"Subtítulo #03", likes: 50, read: true },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título #0${prevState.length + 1}`,
        subtitle: `Subtítulo #0${prevState.length + 1}`,
        likes: 50,
        read: false,
      }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter(post => post.id !== postId));
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <h2>Posts da semana
          <button onClick={handleRefresh}>
            Atualizar
          </button>
        </h2>
      </Header>

      <hr />

      {posts.map((post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      )))}
    </ThemeProvider>
  );
}

export default App;
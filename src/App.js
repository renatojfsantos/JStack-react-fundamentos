import React from 'react';

import Post from './Post';
import Header from './Header';

const posts = [
  {title: "Título #01", subtitle:"Subtítulo #01", likes: 20},
  {title: "Título #02", subtitle:"Subtítulo #02", likes: 10},
  {title: "Título #03", subtitle:"Subtítulo #03", likes: 50},
];

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map((post => (
        <Post
          key={post.title}
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
import { useState, useEffect } from 'react';

const News = () => {
  const [posts, setPosts] = useState([1]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error not reponding');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data.slice(0,2));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>NAUJIENOS</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
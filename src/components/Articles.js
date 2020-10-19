import React, {useState, useEffect} from 'react';

const Articles = () => {
const [posts, setPosts] = useState(null);

useEffect(() => {
  setTimeout(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    setPosts(data);
  }, 5000);
});

  return (
      <div className="articles">

    <div>
      <h2>Articles</h2>
    </div>
    {posts && (
        posts.map(post => (
            <div className="article" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
    )}
    {!posts && <div>loading...</div>}
      </div>
  );
};

export default Articles;

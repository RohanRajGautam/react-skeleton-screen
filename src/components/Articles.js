import React, {useState, useEffect} from 'react';
import SkeletonElement from '../skeletons/SkeletonElement';

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
    <div className='articles'>
      <div>
        <h2>Articles</h2>
      </div>

      <SkeletonElement type='title' />
      <SkeletonElement type='text' />
      <SkeletonElement type='thumbnail' />
      <SkeletonElement type='avatar' />

      {posts &&
        posts.map((post) => (
          <div className='article' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      {!posts && <div>loading...</div>}
    </div>
  );
};

export default Articles;

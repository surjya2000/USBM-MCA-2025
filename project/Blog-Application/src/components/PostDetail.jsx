/* eslint-disable no-unused-vars */
// src/components/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p><strong>Post ID:</strong> {post.id}</p>
    </div>
  );
};

export default PostDetail;

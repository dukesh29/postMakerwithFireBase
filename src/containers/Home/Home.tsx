import React, {useCallback, useEffect, useState} from 'react';
import {Post, PostsList} from "../../type";
import PostBody from "../../components/PostBody/PostBody";
import axiosApi from "../../axiosApi";

const Home = () => {

  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const fetchAllPosts = useCallback(async () => {
    try {
      const postsResponse = await axiosApi.get<PostsList>('/posts.json');

      const posts = Object.keys(postsResponse.data).map(key => {
        const onePost = postsResponse.data[key];
        onePost.id = key;
        return onePost;
      });
      setAllPosts(posts);

    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void fetchAllPosts().catch(console.error);
  }, [fetchAllPosts]);

  const PostsEl = allPosts.map(post => {

    return (
      <PostBody post={post} key={post.id}/>
    )
  });


  return (
    <div className="d-flex flex-column gap-2 mt-2">
      {PostsEl}
    </div>
  );
};

export default Home;
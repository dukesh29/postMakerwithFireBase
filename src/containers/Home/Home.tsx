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
    const deletePost = async (id: string) => {
      await axiosApi.delete('/posts/' + post.id + '.json');
      setAllPosts(prevState => prevState.filter(post => post.id !== id))
    };

    return (
      <PostBody deletePost={() => deletePost(post.id)} post={post} key={post.id}/>
    )
  });


  return (
    <div className="d-flex flex-column gap-2 mt-2">
      {PostsEl}
    </div>
  );
};

export default Home;
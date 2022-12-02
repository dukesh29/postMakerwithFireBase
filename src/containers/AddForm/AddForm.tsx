import React from 'react';
import PostForm from "../../components/PostForm/PostForm";
import {useNavigate} from "react-router-dom";
import {PostApi} from "../../type";
import axiosApi from "../../axiosApi";

const AddForm = () => {

  const navigate = useNavigate();

  const createPost = async (post: PostApi) => {
    try {
      await axiosApi.post('/posts.json', post);
      navigate('/');
    } finally {

    }
  }

  return (
    <div>
      <PostForm onSubmit={createPost}/>
    </div>
  );
};

export default AddForm;
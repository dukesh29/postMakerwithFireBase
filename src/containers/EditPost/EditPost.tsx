import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {PostApi} from "../../type";
import PostForm from "../../components/PostForm/PostForm";

const EditPost: React.FC = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const [post, setPost] = useState<PostApi | null>(null);

  const fetchSelectedPost = useCallback(async () => {
    try {
      const postResponse = await axiosApi.get<PostApi>("/posts/" + id + '.json');
      setPost(postResponse.data);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchSelectedPost().catch(console.error);
    }
  }, [id, fetchSelectedPost]);


  const updatePost = async (post: PostApi) => {
    await axiosApi.put('/posts/' + id + '.json', post);
    navigate('/');
  };

  return post && (
    <div className="row mt-2">
      <div className="col">
        <PostForm onSubmit={updatePost} existingPost={post}/>
      </div>
    </div>
  );
};

export default EditPost;
import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {PostApi} from "../../type";
import axiosApi from "../../axiosApi";

const PostBodyFull = () => {

  const navigateOn = useNavigate();

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

  const deletePost = async () => {
    await axiosApi.delete('/posts/' + id + '.json');
    navigateOn('/');
  };


  return post && (
    <div className="card">
      <div className="card-body">
        <h4>Created on:<span className="fs-4 fst-italic fw-light pe-3"> {post.date}</span> by {post.name}</h4>
        <p className="fs-4">{post.message}</p>
        <div >
          <Link to={`/posts/${id}/edit`} className="btn btn-primary me-3">Edit</Link>
          <button className="btn btn-danger" onClick={deletePost}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostBodyFull;
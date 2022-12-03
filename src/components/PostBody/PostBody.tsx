import React from 'react';
import {Link} from "react-router-dom";
import {Post} from "../../type";

interface Props {
  post: Post;
}

const PostBody: React.FC<Props> = ({post}) => {

  return (
    <div className="card">
      <div className="card-body">
        <h6>Created on:<span className="fs-6 fst-italic fw-light pe-2"> {post.date}</span> by {post.name}</h6>
        <p className="fs-4">{post.message}</p>
        <Link to={`posts/${post.id}`} className="btn btn-dark">Read more...</Link>
      </div>
    </div>
  );
};

export default PostBody;
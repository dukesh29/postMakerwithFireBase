import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Post} from "../../type";

interface Props {
  post: Post;
  deletePost:React.MouseEventHandler;
}

const PostBody: React.FC<Props> = ({post, deletePost}) => {

  const [showEl, setShowEl] = useState(false);

  return (
    <div className="card" style={showEl ? {background: 'black', color: 'white'} : {}}>
      <div className="card-body">
        <h6>Created on:<span className="fs-6 fst-italic fw-light pe-2"> {post.date}</span> by {post.name}</h6>
        <div>
          <p className="fs-4">{post.message}</p>
        </div>
        <div style={showEl ? {display: 'none'} : {display: 'block'}}>
          <button className="btn btn-dark" onClick={() => setShowEl(true)}>Read more...</button>
        </div>

        <div style={showEl ? {display: 'block'} : {display: 'none'}}>
          <Link to={`/posts/${post.id}/edit`} className="btn btn-primary me-2">Edit</Link>
          <button className="btn btn-danger" onClick={deletePost}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostBody;
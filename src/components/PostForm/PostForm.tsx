import React, {useState} from 'react';
import {PostApi} from "../../type";

interface Props {
  existingPost?: PostApi;
  onSubmit:(post:PostApi) => void;
}

const PostForm: React.FC<Props> = ({existingPost,onSubmit}) => {


  const initialState = existingPost ? {
    ...existingPost,
  } : {
    message: '',
    date: '',
    name: '',
  };

  const newDate = Date.now();

  const [post, setPost] = useState<PostApi>(initialState);

  const onPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPost(prev => ({
      ...prev,
      [name]: value,
      date: new Date(newDate).toISOString(),
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...post,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="mt-2">{existingPost ? 'Edit post' : 'Add new post'}</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={post.name}
          onChange={onPostChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          value={post.message}
          onChange={onPostChange}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">{existingPost ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default PostForm;
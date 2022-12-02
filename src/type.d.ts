export interface Post {
  message: string;
  date: string;
  name: string;
  id:string;
}

export type PostApi = Omit<Post,'id'>;

export interface PostsList {
  [id:string]:Post;
}

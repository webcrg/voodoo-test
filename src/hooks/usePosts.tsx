import { useEffect, useState } from 'react';
import { getPosts, getUsers } from '@/api';
import { IPost, IUser } from '@/interfaces';

async function fetchData() {
  const postsResponse = await getPosts();
  const usersResponse = await getUsers();

  return [postsResponse.data, usersResponse.data];
}

function getUserName(post: IPost, users: IUser[]) {
  const findedUser = users.find((user) => user.id === post.userId);
  return findedUser?.name ?? '';
}

function usePosts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    try {
      fetchData()
        .then(([postsResponse, usersResponse]) =>
          postsResponse.map((post: IPost) => ({
            ...post,
            userName: getUserName(post, usersResponse),
          }))
        )
        .then(setPosts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return [posts, setPosts] as const;
}

export default usePosts;

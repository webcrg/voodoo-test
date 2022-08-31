import { useEffect, useState } from 'react';
import { getPosts, getUsers } from '@/api';
import { IPost, IUser } from '@/interfaces';
import { capitalizeFirst } from '@/helpers';

const fetchData = async () => {
  const postsResponse = await getPosts();
  const usersResponse = await getUsers();

  return [postsResponse.data, usersResponse.data];
};

function getUserName(post: IPost, users: IUser[]) {
  const findedUser = users.find((user) => user.id === post.userId);
  return findedUser?.name ?? '';
}

function transformPost(post: IPost, usersResponse: IUser[]) {
  return {
    ...post,
    title: capitalizeFirst(post.title),
    body: capitalizeFirst(post.body),
    userName: getUserName(post, usersResponse),
  };
}

function usePosts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    try {
      fetchData()
        .then(([postsResponse, usersResponse]) =>
          postsResponse.map((post: IPost) => transformPost(post, usersResponse))
        )
        .then(setPosts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return [posts, setPosts] as const;
}

export default usePosts;

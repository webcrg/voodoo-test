import { useEffect, useState } from 'react';
import { getPosts, getUsers } from '@/api';
import { IPost, IUser } from '@/interfaces';

function injectUserNameToPosts(posts: IPost[], users: IUser[]) {
  return posts.map((post) => {
    const findedUser = users.find((user) => user.id === post.userId);

    return { ...post, userName: findedUser?.name ?? '' };
  });
}

function usePosts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsResponse = await getPosts();
      const usersResponse = await getUsers();

      const postsWithUserName = injectUserNameToPosts(
        postsResponse.data,
        usersResponse.data
      );

      setPosts(postsWithUserName);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return [posts, setPosts] as const;
}

export default usePosts;

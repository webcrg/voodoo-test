import React from 'react';
import Masonry from 'react-masonry-css';
import { PostItem } from './post-item';
import { IPost } from '@/hooks/usePosts';

const breakpointColumns = {
  default: 3,
  900: 3,
  650: 2,
  500: 1,
};

interface IPostListProps {
  posts: IPost[];
}

const PostList = React.memo(({ posts }: IPostListProps) => (
  <Masonry
    breakpointCols={breakpointColumns}
    className="masonry-grid"
    columnClassName="masonry-grid_column"
  >
    {posts.map((post) => (
      <PostItem
        key={post.id}
        title={post.title}
        body={post.body}
        userName={post.userName!}
      />
    ))}
  </Masonry>
));

export { PostList };

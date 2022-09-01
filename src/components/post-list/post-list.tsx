import React from 'react';
import Masonry from 'react-masonry-css';
import { PostItem } from './post-item';
import { IPost } from '@/interfaces';

interface IPostListProps {
  posts: IPost[];
  filter: string;
}
const breakpointColumnsObj = {
  default: 3,
  900: 3,
  650: 2,
  500: 1,
};

const PostList = React.memo(({ posts, filter }: IPostListProps) => (
  <Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
  >
    {posts.map((post) => {
      const name = post.userName!.toLowerCase();
      const filterText = filter.toLowerCase();
      const isEmptyFilter = filterText === '';
      const isFilterMatch = name.indexOf(filterText) !== -1;

      return isEmptyFilter || isFilterMatch ? (
        <PostItem
          key={post.id}
          title={post.title}
          body={post.body}
          userName={post.userName!}
        />
      ) : null;
    })}
  </Masonry>
));

export { PostList };

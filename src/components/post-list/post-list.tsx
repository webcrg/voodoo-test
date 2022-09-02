import React from 'react';
import Masonry from 'react-masonry-css';
import { PostItem } from './post-item';
import usePosts from '@/hooks/usePosts';

const breakpointColumns = {
  default: 3,
  900: 3,
  650: 2,
  500: 1,
};

interface IPostListProps {
  filter: string;
}

const PostList = React.memo(({ filter }: IPostListProps) => {
  const [posts] = usePosts();

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
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
  );
});

export { PostList };

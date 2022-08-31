import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Layout } from '@/components/ui/layout';
import { PostList } from './post-list';
import { Filter } from './filter';
import usePosts from '@/hooks/usePosts';

const FILTER_DELAY = 200;

function PostsPage() {
  const [posts] = usePosts();
  const [filterValue, setFilterValue] = useState('');
  const [filterString, setFilterString] = useState('');
  const debouncedFilter = useDebouncedCallback(setFilterString, FILTER_DELAY);

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterValue(value);
    debouncedFilter(value);
  };

  return (
    <Layout>
      <Filter value={filterValue} onChangeHandler={onFilterChange} />
      <PostList posts={posts} filter={filterString} />
    </Layout>
  );
}

export { PostsPage };

import React, { useCallback, useMemo, useState } from 'react';
import { Container } from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';
import { PostList } from './post-list';
import { Filter } from './filter';
import usePosts from '@/hooks/usePosts';

const FILTER_DELAY = 100;

function PostsPage() {
  const [posts] = usePosts();
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const createDebouncedQuery = useDebouncedCallback(
    setDebouncedQuery,
    FILTER_DELAY
  );

  const onFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setQuery(value);
      createDebouncedQuery(value);
    },
    [createDebouncedQuery]
  );

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) => {
        const name = post.userName!.toLowerCase();
        const filterText = debouncedQuery.toLowerCase();
        const isEmptyFilter = filterText === '';
        const isFilterMatch = name.indexOf(filterText) !== -1;

        return isEmptyFilter || isFilterMatch;
      }),
    [debouncedQuery, posts]
  );

  return (
    <Container maxWidth="lg">
      <Filter value={query} onChangeHandler={onFilterChange} />
      <PostList posts={filteredPosts} />
    </Container>
  );
}

export { PostsPage };

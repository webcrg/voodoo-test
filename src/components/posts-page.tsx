import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';
import { PostList } from './post-list';
import { Filter } from './filter';

const FILTER_DELAY = 200;

function PostsPage() {
  const [filterValue, setFilterValue] = useState('');
  const [filterString, setFilterString] = useState('');
  const debouncedFilter = useDebouncedCallback(setFilterString, FILTER_DELAY);

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterValue(value);
    debouncedFilter(value);
  };

  return (
    <Container maxWidth="lg">
      <Filter value={filterValue} onChangeHandler={onFilterChange} />
      <PostList filter={filterString} />
    </Container>
  );
}

export { PostsPage };

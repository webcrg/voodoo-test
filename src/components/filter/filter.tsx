import React from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface IFilterProps {
  value: string;
  onChangeHandler: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
}

function Filter({ value, onChangeHandler }: IFilterProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} m={3}>
      <TextField
        label="Filter by author..."
        variant="outlined"
        value={value}
        onChange={onChangeHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export { Filter };

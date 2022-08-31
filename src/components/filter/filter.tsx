import React from 'react';
import { Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { BootstrapInput } from '../ui/bootstrap-input';

interface IFilterProps {
  value: string;
  onChangeHandler: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
}

function Filter({ value, onChangeHandler }: IFilterProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} m={3}>
      <BootstrapInput
        placeholder="Filter by author..."
        value={value}
        onChange={onChangeHandler}
        startAdornment={
          <InputAdornment position="start" disablePointerEvents>
            <SearchIcon />
          </InputAdornment>
        }
        size="small"
      />
    </Box>
  );
}

export { Filter };

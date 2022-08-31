import React from 'react';
import styled from '@emotion/styled';
import { InputBase } from '@mui/material';

const BootstrapInputStyled = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '220px',
    padding: '8px 12px',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    '&:focus': {
      boxShadow: 'rgb(25 118 210 / 25%) 0 0 0 0.2rem',
      borderColor: '#1976d2',
    },
  },
  '& .MuiInputAdornment-root': {
    borderRadius: 4,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: '#fcfcfb',
    border: '1px solid #ced4da',
    borderRight: 0,
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    height: '100%',
    maxHeight: '100%',
    padding: '7px 12px',
  },
}));

function BootstrapInput({ ...props }) {
  return <BootstrapInputStyled {...props} />;
}

export { BootstrapInput };

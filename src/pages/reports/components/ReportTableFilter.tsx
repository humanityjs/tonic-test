import { KeyboardArrowDown, Search, Settings } from '@mui/icons-material';
import {
  Box,
  Fade,
  FormControl,
  Grow,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  type SelectChangeEvent,
} from '@mui/material';
import React from 'react';

interface ReportTableFilterProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterOptions: {
    key: string;
    label: string;
    options: string[];
  }[];
  filters: {
    [key: string]: string;
  };
  handleFilterChange: (
    key: string
  ) => (event: SelectChangeEvent<string>) => void;
}

function ReportTableFilter({
  searchTerm,
  handleSearchChange,
  filterOptions,
  filters,
  handleFilterChange,
}: ReportTableFilterProps) {
  return (
    <Fade in={true} timeout={1200}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            mt: '20px',
            mb: '20px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flex: 1,
            width: '100%',
            overflow: 'scroll',
          }}
        >
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              'fontSize': '13px',
              'transition': 'all 0.3s ease-in-out',
              'borderRadius': '12px',
              'width': '250px',
              'minWidth': '250px',
              '& .MuiOutlinedInput-root': {
                'borderRadius': '12px',
                'backgroundColor': '#fff',
                'transition': 'all 0.3s ease-in-out',
                '& fieldset': {
                  borderColor: '#e0e0e0',
                  transition: 'border-color 0.3s ease-in-out',
                },
                '&:hover fieldset': {
                  borderColor: '#1976d2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976d2',
                  boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
                },
              },
              '& input': {
                'fontSize': '13px',
                'padding': '12px 15px',
                'transition': 'all 0.3s ease-in-out',
                'bgcolor': '#fff',
                'borderRadius': '12px',
                'boxShadow': '0px 2.22px 3.33px 0px #0000000D',
                '&:hover': {
                  boxShadow: '0 8px 24px 0 rgba(0,0,0,0.1)',
                  transform: 'translateY(-1px)',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search
                    sx={{
                      color: '#9e9e9e',
                      fontSize: 18,
                      transition: 'color 0.3s ease-in-out',
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          {filterOptions.map((filter, index) => (
            <Grow in={true} timeout={600 + index * 100} key={filter.key}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value={
                    filters[filter.key as keyof typeof filters] || filter.label
                  }
                  onChange={handleFilterChange(filter.key)}
                  displayEmpty
                  input={<OutlinedInput />}
                  sx={{
                    'fontSize': '13px',
                    'transition': 'all 0.3s ease-in-out',
                    'bgcolor': '#fff',
                    'borderRadius': '12px',
                    'boxShadow': '0px 2.22px 3.33px 0px #0000000D',
                    'py': '12px',
                    'px': '15px',
                    '&:hover': {
                      boxShadow: '0 8px 24px 0 rgba(0,0,0,0.1)',
                    },
                    '& .MuiSelect-select': {
                      padding: '0px',
                      paddingRight: '20px !important',
                      color: '#666',
                      transition: 'all 0.3s ease-in-out',
                      fontSize: '13px',
                    },
                    '& .MuiSelect-icon': {
                      right: '8px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#e0e0e0',
                      transition: 'border-color 0.3s ease-in-out',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
                    },
                  }}
                  IconComponent={KeyboardArrowDown}
                >
                  <MenuItem value={filter.label}>{filter.label}</MenuItem>
                  {filter.options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grow>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            sx={{
              'transition': 'all 0.3s ease-in-out',
              'bgcolor': '#fff',
              'borderRadius': '11px',
              'boxShadow': '0 4px 12px 0 rgba(0,0,0,0.05)',
              'py': '12px',
              'px': '15px',
              '&:hover': {
                boxShadow: '0 8px 24px 0 rgba(0,0,0,0.1)',
                color: '#1976d2',
                backgroundColor: 'rgba(25, 118, 210, 0.1)',
              },
            }}
          >
            <Settings sx={{ fontSize: '15px' }} />
          </IconButton>
        </Box>
      </Box>
    </Fade>
  );
}

export default ReportTableFilter;

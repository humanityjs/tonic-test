import { Box, Typography } from '@mui/material';

function PageNotFound() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Uh oh
      </Typography>
      <Typography variant="body1" color="text.secondary">
        The page you are looking for cannot be found.
      </Typography>
    </Box>
  );
}

export default PageNotFound;

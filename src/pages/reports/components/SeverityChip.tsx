import type { SxProps } from '@mui/material';
import { Chip, Typography } from '@mui/material';

interface SeverityChipProps {
  name: string;
  value: number;
  color: string;
  sx?: SxProps;
}

function SeverityChip(item: SeverityChipProps) {
  return (
    <Chip
      key={item.name}
      label={
        <>
          {item.name}
          <Typography
            variant="body2"
            sx={{ color: '#03165F', fontWeight: '700', ml: '10px' }}
          >
            {item.value}
          </Typography>
        </>
      }
      sx={{
        'bgcolor': `${item.color}20`,
        'color': item.color,
        'fontWeight': '500',
        'fontSize': '14px',
        'justifyContent': 'space-between',
        'borderRadius': '6px',
        '& .MuiChip-label': {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          px: '8px',
          py: '4px',
        },
        ...(item.sx || {}),
      }}
    />
  );
}

export default SeverityChip;

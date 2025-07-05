import { Box, List, ListItem, Typography } from '@mui/material';
import { colors } from '../../../theme/colors';
import SeverityChip from './SeverityChip';

const topVulnerableAssets = [
  { name: 'D.G. ASUNTOS LEGALES', c: 3, h: 3, m: 1 },
  { name: 'D.G. CLIENTE', c: 2, h: 13, m: 15 },
  { name: 'D.G. SAP', c: 1, h: 8, m: 21 },
  { name: 'D.G. CLIENTE 2', c: 2, h: 13, m: 15 },
  { name: 'D.G. SAP 2', c: 1, h: 8, m: 21 },
];

function TopVulnerableAssets() {
  return (
    <Box
      sx={{
        maxHeight: '100%',
        overflow: 'hidden',
        pr: '30px',
        borderRight: '1px solid #E2E2EA',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          mb: '22px',
          fontSize: '15px',
          color: '#03165F',
        }}
      >
        Top Vulnerable Assets
      </Typography>
      <Box
        sx={{
          display: 'flex',
          color: 'text.secondary',
          justifyContent: 'flex-start',
          alignItems: 'center',
          py: '13px',
          borderBottom: '1px solid #EAECF0',
        }}
      >
        <Typography sx={{ flex: 1, fontSize: '12px', fontWeight: '500' }}>
          ASSET NAME
        </Typography>
        <Typography
          sx={{ minWidth: '167px', fontSize: '12px', fontWeight: '500' }}
        >
          SEVERITY
        </Typography>
      </Box>
      <List
        sx={{
          overflow: 'scroll',
          maxHeight: '100%',
          paddingBottom: '25px',
        }}
        disablePadding
      >
        {topVulnerableAssets.map((asset, index) => {
          const severityData = ['c', 'h', 'm'].map((item) => {
            return {
              name: item.toUpperCase(),
              value: asset[item as keyof typeof asset],
              color: colors[item as keyof typeof colors],
            };
          });
          return (
            <ListItem
              key={asset.name}
              disablePadding
              sx={{
                py: '12.5px',
                borderBottom:
                  index < topVulnerableAssets.length - 1
                    ? '1px solid #EAECF0'
                    : 'none',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#03165F',
                  flex: 1,
                }}
              >
                {asset.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, minWidth: '167px' }}>
                {severityData.map((item) => (
                  <SeverityChip
                    key={item.name}
                    name={item.name}
                    value={item.value as number}
                    color={item.color}
                  />
                ))}
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default TopVulnerableAssets;

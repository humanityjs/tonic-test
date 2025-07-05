import { Box, Typography } from '@mui/material';
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { colors } from '../../../theme/colors';
import SeverityChip from './SeverityChip';

const severityData = [
  { name: 'Critical', value: 3, color: colors.c },
  { name: 'High', value: 3, color: colors.h },
  { name: 'Medium', value: 1, color: colors.m },
  { name: 'Low', value: 1, color: colors.l },
];

function FindingsBySeverity() {
  return (
    <Box
      sx={{
        maxHeight: {
          xl: '100%',
          lg: '100%',
          md: '261px',
          sm: '261px',
          xs: '261px',
        },
        overflow: 'scroll',
        pr: '30px',
        borderRight: {
          xl: '1px solid #E2E2EA',
          lg: '1px solid #E2E2EA',
          md: 'none',
          sm: 'none',
          xs: 'none',
        },
        borderBottom: {
          xl: 'none',
          lg: 'none',
          md: '1px solid #E2E2EA',
          sm: '1px solid #E2E2EA',
          xs: '1px solid #E2E2EA',
        },
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
        Findings By Severity
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            pl: '10px',
          }}
        >
          {severityData.map((item) => (
            <SeverityChip
              key={item.name}
              name={item.name}
              value={item.value}
              color={item.color}
              sx={{ mb: '10px' }}
            />
          ))}
        </Box>
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <ResponsiveContainer width={150} height={150}>
            <PieChart>
              <Pie
                data={severityData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={73}
                dataKey="value"
                startAngle={90}
                endAngle={450}
                paddingAngle={3}
                cornerRadius={14}
              >
                {severityData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke={entry.color}
                  />
                ))}
                <Label
                  value={severityData.reduce(
                    (acc, item) => acc + item.value,
                    0
                  )}
                  position="center"
                  fontSize="36px"
                  fontWeight="bold"
                  fill="#333"
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default FindingsBySeverity;

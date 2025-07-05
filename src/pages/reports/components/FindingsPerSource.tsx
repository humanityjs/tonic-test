import { Box, Typography } from '@mui/material';
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { colors } from '../../../theme/colors';
import ArticWolfSVG from './ArticWolfSVG';
import WindowsDefenderSVG from './WindowsDefenderSVG';

const sourceData = [
  {
    name: 'Microsoft Defender',
    value: 428,
    color: '#5694FF',
    icon: <WindowsDefenderSVG />,
  },
  { name: 'Arctic Wolf', value: 119, color: '#23618E', icon: <ArticWolfSVG /> },
];

const severityData = [
  { name: 'Critical', value: 3, color: colors.c },
  { name: 'High', value: 3, color: colors.h },
  { name: 'Medium', value: 1, color: colors.m },
  { name: 'Low', value: 1, color: colors.l },
];

function FindingsPerSource() {
  return (
    <Box sx={{ maxHeight: '100%', overflow: 'scroll', pr: '30px' }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          mb: '22px',
          fontSize: '15px',
          color: '#03165F',
        }}
      >
        Finding Per Source
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box sx={{ flex: 1, mb: '30px' }}>
          {sourceData.map((source) => (
            <Box
              key={source.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                gap: '14px',
              }}
            >
              <Box
                sx={{
                  bgcolor: source.color,
                  width: 5,
                  height: 30,
                }}
              ></Box>
              {source.icon}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '600',
                  fontSize: '35px',
                  color: '#656575',
                }}
              >
                {source.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#03165F',
                }}
              >
                {source.name}
              </Typography>
            </Box>
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
                data={sourceData}
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
                {sourceData.map((entry, index) => (
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

export default FindingsPerSource;

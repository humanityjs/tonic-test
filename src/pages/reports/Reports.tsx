import { Box } from '@mui/material';
import FindingsBySeverity from './components/FindingsBySeverity';
import FindingsPerSource from './components/FindingsPerSource';
import TopVulnerableAssets from './components/TopVulnerableAssets';

const Reports = () => {
  return (
    <Box>
      {/* Report Summary */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 3,
          bgcolor: '#fff',
          borderColor: 'rgba(226, 226, 234, 1)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px 0 rgba(0,0,0,0.05)',
          padding: '20px',
          height: '261px',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        {/* Findings By Severity */}
        <FindingsBySeverity />

        {/* Top Vulnerable Assets */}
        <TopVulnerableAssets />

        {/* Finding Per Source */}
        <FindingsPerSource />
      </Box>
    </Box>
  );
};

export default Reports;

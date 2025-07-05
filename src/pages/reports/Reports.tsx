import type { SelectChangeEvent } from '@mui/material';
import { Box, Fade } from '@mui/material';
import { useState } from 'react';
import FindingsBySeverity from './components/FindingsBySeverity';
import FindingsPerSource from './components/FindingsPerSource';
import ReportTable from './components/ReportTable';
import ReportTableFilter from './components/ReportTableFilter';
import TopVulnerableAssets from './components/TopVulnerableAssets';
import { filterOptions, findingsData } from './data';

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    riskLevel: '',
    asset: '',
    responsibility: '',
    resolvingGroup: '',
    businessUnit: '',
    internetExposure: '',
    criticalAsset: '',
    regulation: '',
    riskState: '',
  });

  const handleFilterChange =
    (filterName: string) => (event: SelectChangeEvent<string>) => {
      setFilters((prev) => ({
        ...prev,
        [filterName]: event.target.value,
      }));
    };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = findingsData.filter((finding) => {
    // Search filter
    const matchesSearch =
      !searchTerm ||
      finding.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      finding.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
      finding.software.toLowerCase().includes(searchTerm.toLowerCase()) ||
      finding.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      finding.source.toLowerCase().includes(searchTerm.toLowerCase());

    // Risk Level filter
    const matchesRiskLevel =
      !filters.riskLevel ||
      filters.riskLevel === 'Risk Level' ||
      finding.severity === filters.riskLevel;

    // Asset filter
    const matchesAsset =
      !filters.asset ||
      filters.asset === 'Asset' ||
      finding.asset.includes(filters.asset);

    // Internet Exposure filter
    const matchesInternetExposure =
      !filters.internetExposure ||
      filters.internetExposure === 'Internet Exposure' ||
      (filters.internetExposure === 'Yes' &&
        finding.internetExposed === 'shield') ||
      (filters.internetExposure === 'No' && finding.internetExposed === 'none');

    // Risk State filter (based on status)
    const matchesRiskState =
      !filters.riskState ||
      filters.riskState === 'Risk State' ||
      (filters.riskState === 'Open' &&
        ['Assigned', 'Unassigned'].includes(finding.status)) ||
      (filters.riskState === 'Closed' &&
        ['Resolved', 'Accepted'].includes(finding.status));

    return (
      matchesSearch &&
      matchesRiskLevel &&
      matchesAsset &&
      matchesInternetExposure &&
      matchesRiskState
    );
  });

  return (
    <Box>
      {/* Report Summary */}
      <Fade in={true} timeout={800}>
        <Box
          sx={{
            'display': 'grid',
            'gridTemplateColumns': 'repeat(3, 1fr)',
            'gap': 3,
            'bgcolor': '#fff',
            'borderColor': 'rgba(226, 226, 234, 1)',
            'borderRadius': '12px',
            'boxShadow': '0 4px 12px 0 rgba(0,0,0,0.05)',
            'padding': '20px',
            'height': '261px',
            'overflow': 'hidden',
            'position': 'relative',
            'transition': 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 8px 24px 0 rgba(0,0,0,0.1)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <FindingsBySeverity />
          <TopVulnerableAssets />
          <FindingsPerSource />
        </Box>
      </Fade>

      <ReportTableFilter
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        filterOptions={filterOptions}
        filters={filters}
        handleFilterChange={handleFilterChange}
      />

      <ReportTable filteredData={filteredData} />
    </Box>
  );
};

export default Reports;

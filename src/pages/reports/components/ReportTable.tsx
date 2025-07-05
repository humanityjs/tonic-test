import { ContactPhoneOutlined } from '@mui/icons-material';
import {
  Box,
  Chip,
  Fade,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Globe, GlobeLock } from 'lucide-react';
import { BLUE, colors, CORAL, GRAY, LIME_GREEN } from '../../../theme/colors';
import type { Finding } from '../data';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Assigned':
      return BLUE;
    case 'Accepted':
      return LIME_GREEN;
    case 'Ignored':
      return GRAY;
    case 'Resolved':
      return LIME_GREEN;
    case 'Unassigned':
      return CORAL;
    default:
      return GRAY;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return colors.c;
    case 'High':
      return colors.h;
    case 'Medium':
      return colors.m;
    case 'Low':
      return colors.l;
    default:
      return GRAY;
  }
};

interface ReportTableProps {
  filteredData: Finding[];
}

function ReportTable({ filteredData }: ReportTableProps) {
  return (
    <Fade in={true} timeout={1200}>
      <Box
        sx={{
          'bgcolor': '#fff',
          'borderRadius': '12px',
          'boxShadow': '0 4px 12px 0 rgba(0,0,0,0.05)',
          'transition': 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 24px 0 rgba(0,0,0,0.1)',
          },
        }}
      >
        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  'FINDING',
                  'ASSET',
                  'AFFECTED SOFTWARE',
                  'OWNED BY',
                  'INTERNET EXPOSED',
                  'STATUS',
                  'SEVERITY',
                  'SOURCE',
                  'FIRST SEEN',
                  'LAST SEEN',
                ].map((header, index) => (
                  <Fade in={true} timeout={800 + index * 50} key={header}>
                    <TableCell
                      sx={{
                        color: '#9A9AAF',
                        fontSize: '12px',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                      }}
                    >
                      {header}
                    </TableCell>
                  </Fade>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((finding, index) => (
                <Fade
                  in={true}
                  timeout={400 + index * 100}
                  key={`${finding.id}-${index}`}
                >
                  <TableRow
                    sx={{
                      'transition': 'all 0.3s ease-in-out',
                      'cursor': 'pointer',
                      '&:hover': {
                        bgcolor: '#f5f5f5',
                        transform: 'translateX(4px)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      },
                      '&:nth-of-type(odd)': {
                        backgroundColor: 'rgba(0,0,0,0.01)',
                      },
                    }}
                  >
                    {/* Column 1 */}
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 400,
                          color: '#03165F',
                          transition: 'color 0.3s ease-in-out',
                          fontSize: '14px',
                        }}
                      >
                        {finding.id}
                      </Typography>
                    </TableCell>
                    {/* Column 2 */}
                    <TableCell>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        {finding.assetImage && (
                          <Box>
                            <img
                              src={finding.assetImage}
                              alt="Asset"
                              style={{ height: 20 }}
                            />
                          </Box>
                        )}
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: '#03165F',
                            fontSize: '14px',
                          }}
                        >
                          {finding.asset}
                        </Typography>
                      </Box>
                    </TableCell>
                    {/* Column 3 */}
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          maxWidth: 300,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontWeight: 400,
                          color: '#03165F',
                          fontSize: '14px',
                        }}
                      >
                        {finding.software}
                      </Typography>
                    </TableCell>
                    {/* Column 4 */}
                    <TableCell>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <ContactPhoneOutlined
                          sx={{
                            color: '#0B60EB',
                            fontSize: '15px',
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: '#03165F',
                            fontSize: '14px',
                          }}
                        >
                          {finding.owner}
                        </Typography>
                      </Box>
                    </TableCell>
                    {/* Column 5 */}
                    <TableCell>
                      {finding.internetExposed === 'medium' ? (
                        <Box
                          sx={{
                            bgcolor: 'rgba(249, 211, 61, 0.15)',
                            height: '26px',
                            width: '26px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Globe size={12.5} color="#FDDA3E" />
                        </Box>
                      ) : finding.internetExposed === 'none' ? (
                        <Box
                          sx={{
                            bgcolor: '#F2F3F7',
                            height: '26px',
                            width: '26px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <GlobeLock size={12.5} color="#9A9AAF" />
                        </Box>
                      ) : (
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: '#03165F',
                            fontSize: '14px',
                          }}
                        >
                          N/A
                        </Typography>
                      )}
                    </TableCell>
                    {/* Column 6 */}
                    <TableCell>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Box
                          sx={{
                            'width': 8,
                            'height': 8,
                            'borderRadius': '50%',
                            'bgcolor': getStatusColor(finding.status),
                            'transition': 'all 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'scale(1.3)',
                              boxShadow: `0 0 8px ${getStatusColor(
                                finding.status
                              )}`,
                            },
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: '#03165F',
                            fontSize: '14px',
                          }}
                        >
                          {finding.status}
                        </Typography>
                      </Box>
                    </TableCell>
                    {/* Column 7 */}
                    <TableCell>
                      <Chip
                        label={finding.severity}
                        size="small"
                        sx={{
                          'bgcolor': `${getSeverityColor(finding.severity)}20`,
                          'color': getSeverityColor(finding.severity),
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
                          'transition': 'all 0.3s ease-in-out',
                          '&:hover': {
                            bgcolor: `${getSeverityColor(finding.severity)}30`,
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    </TableCell>
                    {/* Column 8 */}
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 400,
                          color: '#03165F',
                          fontSize: '14px',
                        }}
                      >
                        {finding.source}
                      </Typography>
                    </TableCell>
                    {/* Column 9 */}
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '14px',
                          color: '#03165F',
                          fontWeight: 400,
                        }}
                      >
                        {finding.firstSeen.split('\n')[0]}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#9A9AAF',
                        }}
                      >
                        {finding.firstSeen.split('\n')[1]}
                      </Typography>
                    </TableCell>
                    {/* Column 10 */}
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '14px',
                          color: '#03165F',
                          fontWeight: 400,
                        }}
                      >
                        {finding.lastSeen.split('\n')[0]}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#9A9AAF',
                        }}
                      >
                        {finding.lastSeen.split('\n')[1]}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </Fade>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Fade>
  );
}

export default ReportTable;

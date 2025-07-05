import ERP from '../../assets/erp.png';
import SAP from '../../assets/sap.png';

export interface Finding {
  id: string;
  asset: string;
  software: string;
  owner: string;
  internetExposed: string;
  status: string;
  severity: string;
  source: string;
  firstSeen: string;
  lastSeen: string;
  assetImage: string;
}

export const findingsData: Finding[] = [
  {
    id: 'CVE-2024-4741',
    asset: 'AP_CORP_PORTAL...',
    software:
      'La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...',
    owner: 'Pedro Pablo Cas...',
    internetExposed: 'medium',
    status: 'Assigned',
    severity: 'Critical',
    source: 'SOC',
    firstSeen: '21/12/2023\n23:34:02',
    lastSeen: '12 Oct 2024\n23:34:02',
    assetImage: ERP,
  },
  {
    id: 'CVE-2024-4741',
    asset: 'AP_CORP_PORTAL...',
    software:
      'La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...',
    owner: 'Pedro Pablo Cas...',
    internetExposed: 'medium',
    status: 'Accepted',
    severity: 'Critical',
    source: 'Hacking',
    firstSeen: '21/12/2023\n23:34:02',
    lastSeen: '12 Oct 2024\n23:34:02',
    assetImage: ERP,
  },
  {
    id: 'CVE-2024-4741',
    asset: 'AP_CORP_PORTAL...',
    software:
      'La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...',
    owner: 'Pedro Pablo Cas...',
    internetExposed: 'medium',
    status: 'Ignored',
    severity: 'High',
    source: 'DevSecOps',
    firstSeen: '21/12/2023\n23:34:02',
    lastSeen: '12 Oct 2024\n23:34:02',
    assetImage: ERP,
  },
  {
    id: 'CVE-2024-4741',
    asset: 'AP_PORTAL_TA',
    software:
      'La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...',
    owner: 'Pedro Pablo Cas...',
    internetExposed: 'none',
    status: 'Resolved',
    severity: 'High',
    source: 'Hacking',
    firstSeen: '12 Oct 2024\n23:34:02',
    lastSeen: '12 Oct 2024\n23:34:02',
    assetImage: ERP,
  },
  {
    id: 'CVE-2024-4741',
    asset: 'SAP System',
    software:
      'La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...',
    owner: 'John Smith',
    internetExposed: 'N/A',
    status: 'Assigned',
    severity: 'Medium',
    source: 'DevSecOps',
    firstSeen: '12 Oct 2024\n23:34:02',
    lastSeen: '12 Oct 2024\n23:34:02',
    assetImage: SAP,
  },
  {
    id: 'CVE-2024-4741',
    asset: 'SAP System',
    software:
      'La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...',
    owner: 'John Smith',
    internetExposed: 'none',
    status: 'Accepted',
    severity: 'Medium',
    source: 'Hacking',
    firstSeen: '12 Oct 2024\n23:34:02',
    lastSeen: '12 Oct 2024\n23:34:02',
    assetImage: SAP,
  },
  {
    id: 'CVE-2024-4741',
    asset: 'SAP System',
    software:
      'La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...',
    owner: 'John Smith',
    internetExposed: 'medium',
    status: 'Unassigned',
    severity: 'Medium',
    source: 'DevSecOps',
    firstSeen: '12 Oct 2024\n23:34:02',
    lastSeen: '12 Oct 2024\n23:34:02',
    assetImage: SAP,
  },
  {
    id: 'CVE-2024-4741',
    asset: 'SAP System',
    software:
      'La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...',
    owner: 'John Smith',
    internetExposed: 'none',
    status: 'Accepted',
    severity: 'Medium',
    source: 'Hacking',
    firstSeen: '12 Oct 2024\n23:34:02',
    lastSeen: '12 Oct 2024\n23:34:02',
    assetImage: SAP,
  },
];

export const filterOptions = [
  {
    key: 'riskLevel',
    label: 'Risk Level',
    options: ['Critical', 'High', 'Medium', 'Low'],
  },
  {
    key: 'asset',
    label: 'Asset',
    options: ['AP_CORP_PORTAL', 'SAP System'],
  },
  { key: 'responsibility', label: 'Responsibility', options: [] },
  {
    key: 'resolvingGroup',
    label: 'Resolving Group',
    options: [],
  },
  { key: 'businessUnit', label: 'Business Unit', options: [] },
  {
    key: 'internetExposure',
    label: 'Internet Exposure',
    options: ['Yes', 'No'],
  },
  {
    key: 'criticalAsset',
    label: 'Critical Asset',
    options: ['Yes', 'No'],
  },
  { key: 'regulation', label: 'Regulation', options: [] },
  {
    key: 'riskState',
    label: 'Risk State',
    options: ['Open', 'Closed'],
  },
];

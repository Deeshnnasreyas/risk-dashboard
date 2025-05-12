import HomeIcon from "../assets/Home.svg";
import MessageIcon from "../assets/Message.svg";
import ReportlistIcon from "../assets/Reportlist.svg";
import ReportbaseIcon from "../assets/Reportbase.svg";
import BookmarkIcon from "../assets/Bookmark.svg";
import NotificationIcon from "../assets/Notification.svg";
import SettingIcon from "../assets/Setting.svg";
import InfoIcon from "../assets/Info.svg";
export const riskPriority = [
  {
    icon: "/images/risk.png",
    count: 213,
    name: "Open Risks",
  },
  {
    icon: "/images/chart.png",
    count: 23,
    name: "High Priority",
  },
  {
    icon: "/images/warning.png",
    count: 121,
    name: "Threats",
  },
];
export const headerMenu = [
  {
    icon: BookmarkIcon,
    label: "Book Mark",
  },
  {
    icon: NotificationIcon,
    label: "Notification",
  },
  {
    icon: InfoIcon,
    label: "Information",
  },
];
export const sidebarMenu = [
  {
    icon: HomeIcon,
    label: "Home",
  },
  {
    icon: MessageIcon,
    label: "Export",
  },
  {
    icon: ReportlistIcon,
    label: "Department",
  },
  {
    icon: ReportbaseIcon,
    label: "Dashboard",
  },
  {
    icon: SettingIcon,
    label: "Settings",
  },
];
export const riskData = [
  {
    id: 1,
    recordNo: "REC001",
    description: "Unauthorized access to admin portal",
    status: "New",
    type: "Threat",
    phase: "Planning",
    department: "IT",
    impact: 4,
    likelihood: 3,
    
  },
  {
    id: 2,
    recordNo: "REC002",
    description: "Delay in project delivery",
    status: "Under Mitigation",
    type: "Opportunity",
    phase: "Execution",
    department: "Project Management",
    impact: 3,
    likelihood: 2,
  },
  {
    id: 3,
    recordNo: "REC003",
    description: "Data loss due to server crash",
    status: "Closed",
    type: "Technical",
    phase: "Deployment",
    department: "Infrastructure",
    impact: 5,
    likelihood: 4,
  },
  {
    id: 4,
    recordNo: "REC004",
    description: "Non-compliance with GDPR",
    status: "New",
    type: "Opportunity",
    phase: "Monitoring",
    department: "Legal",
    impact: 4,
    likelihood: 3,
  },
  {
    id: 5,
    recordNo: "REC005",
    description: "System outage during peak hours",
    status: "Under Mitigation",
    type: "Opportunity",
    phase: "Testing",
    department: "IT",
    impact: 5,
    likelihood: 5,
  },
  {
    id: 6,
    recordNo: "REC006",
    description: "Inaccurate financial reporting",
    status: "Closed",
    type: "Threat",
    phase: "Review",
    department: "Finance",
    impact: 3,
    likelihood: 2,
  },
  {
    id: 7,
    recordNo: "REC007",
    description: "Malware infection in internal network",
    status: "New",
    type: "Opportunity",
    phase: "Execution",
    department: "Cybersecurity",
    impact: 4,
    likelihood: 4,
  },
  {
    id: 8,
    recordNo: "REC008",
    description: "Supplier contract dispute",
    status: "Under Mitigation",
    type: "Opportunity",
    phase: "Procurement",
    department: "Procurement",
    impact: 2,
    likelihood: 3,
  },
  {
    id: 9,
    recordNo: "REC009",
    description: "Employee data leak",
    status: "Closed",
    type: "Opportunity",
    phase: "Monitoring",
    department: "HR",
    impact: 5,
    likelihood: 3,
  },
  {
    id: 10,
    recordNo: "REC010",
    description: "Application crash on login",
    status: "New",
    type: "Opportunity",
    phase: "Testing",
    department: "Engineering",
    impact: 3,
    likelihood: 2,
  },
];

export const tableHeader = [
  { label: "Record No", key: "recordNo", className: "w-[110px]" },
  {
    label: "Risk Activity Description",
    key: "description",
    className: "w-[311px]",
  },
  { label: "Status", key: "status", className: "w-[170px]" },
  { label: "Type", key: "type", className: "w-[156px]" },
  { label: "Phase", key: "phase", className: "w-[156px]" },
  { label: "Department", key: "department", className: "w-[185px]" },
  { label: "Impact (1–5)", key: "impact", className: "w-[148px]" },
  { label: "Likelihood (1–5)", key: "likelihood", className: "w-[148px]" },
];

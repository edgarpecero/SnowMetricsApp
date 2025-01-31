import { LabelList } from "recharts";
import CustomChartLabel from "../../component/chartWrapper/CustomChartLabel";
import CustomChartLegend from "../../component/chartWrapper/CustomChartLegend";
import { theme } from "../helpers/theme";
import ChartCardTable from "./common/ChartCardTable";
import NewAndClosedTicketCountChart from "./newAndClosedTicketCount/NewAndClosedTicketCountChart";
import NewTicketCountAndMttrChart from "./newTicketCountAndMttr/NewTicketCountAndMttrChart";
import CustomBar from "../../component/chartWrapper/CustomBar";
import CustomChartActiveDot from "../../component/chartWrapper/CustomChartActiveDot";
import { createTheme } from '@mui/material/styles';

// Default styles for ChartCardTable
const defaultChartCardTableStyles = {
  tableLayout: 'fixed',
  '& td, & th': {
    border: '1px solid white',
  },
  '& .MuiTableHead-root': {
    backgroundColor: '#cfe2f3',
  },
  '& .MuiTableBody-root': {
    backgroundColor: '#e7f3fd',
    '& .MuiTableCell-root:first-of-type': {
      textAlign: 'left',
    },
  },
  '& .MuiTableCell-root': {
    height: '48px',
    padding: '0 16px',
    textAlign: 'center',
    lineHeight: '14px',
    fontSize: '12px',
  },
  '& .MuiTableCell-head': {
    fontSize: '13px',
    fontWeight: 600,
    color: '#054b8a',
    lineHeight: '15px',
  },
  '& .MuiTableRow-head': {
    height: '48px',
  },
};

// Helper function to create ChartCardTable configurations
const createChartCardTableConfig = (title, columns, data, hideIcon = false, styles = {}, onMoreDetailsClick) => ({
  component: ChartCardTable,
  chartProps: {
    title,
    columns,
    data,
    hideIcon,
    styles: { ...defaultChartCardTableStyles, ...styles },
    onMoreDetailsClick,
  },
});

//TODO: remove dummy data and implement actual data fetching
// Chart components for row one
export const chartComponentsRowOne = [
  {
    component: NewAndClosedTicketCountChart,
    chartProps: {
      title: 'New & Closed Ticket Count',
    },
  },
  createChartCardTableConfig(
    'SLA Compliance By Incident Severity',
    ['Severity', 'SLA Time', 'Made SLA', 'No SLA', 'SLA % (Copy)', ''],
    [
      { severity: 2, slaTime: '2 days', madeSLA: 0, noSLA: 0, slaPercent: '100.00%', icon: '#f44336' },
      { severity: 3, slaTime: '5 days', madeSLA: 25, noSLA: 15, slaPercent: '62.50%', icon: '#ff9800' },
      { severity: 4, slaTime: '44 days', madeSLA: 23, noSLA: 7, slaPercent: '76.67%', icon: '#4caf50' },
    ],
    {
      '& .MuiTableRow-head .MuiTableCell-root:first-of-type': { padding: '0 6px' },
      '& .MuiTableRow-head .MuiTableCell-root:nth-of-type(2)': { padding: '0 24px' },
      '& .MuiTableBody-root': {
        backgroundColor: '#EBEBEB', // Background color for table body rows
        '& .MuiTableCell-root:first-of-type': {
          textAlign: 'center', // Align text to the left to the first column
        },
      },
    },
    () => console.log('SLA Compliance By Incident Severity')
  ),
  {
    component: NewTicketCountAndMttrChart,
    chartProps: {
      title: 'New Ticket Count & MTTR (Days)',
      hideIcon: true,
    },
  },
];

// Chart components for row two
export const chartComponentsRowTwo = [
  createChartCardTableConfig(
    'Age of In Progress Tickets',
    ['Team', 'Support Manager', '<=2 Days', '>2 Days', '>5 Days', 'Total'],
    [
      ['IVAL', 'Cindy Freeman', 1, 3, 1, 5],
      ['MPIV', 'Alberto Valdivia', 2, 1, 2, 5],
      ['Grand Total', '', 3, 4, 3, 10],
    ],
    {
      tableLayout: 'none',
      '& .MuiTableRow-head .MuiTableCell-root:nth-of-type(2)': { flexGrow: 2 },
      '& .MuiTableBody-root .MuiTableRow-root:last-of-type .MuiTableCell-root:not(:first-of-type)': {
        color: '#FE4300',
        fontWeight: 600,
      },
      '& .MuiTableBody-root .MuiTableCell-root:nth-of-type(2)': { padding: '0 4px' },
      '& .MuiTableBody-root .MuiTableRow-root .MuiTableCell-root:last-of-type': {
        color: '#FE4300',
        fontWeight: 600,
      },
    },
    () => console.log('Age of In Progress Tickets')
  ),
  createChartCardTableConfig(
    'Breakdown of New Tickets',
    ['Team', 'New', 'Closed', 'In Progress'],
    [
      { team: 'IVAL', new: 17, closed: 12, inProgress: 5 },
      { team: 'MPIV', new: 18, closed: 10, inProgress: 3 },
      { team: 'Total', new: 35, closed: 22, inProgress: 8 },
    ],
    {
      '& .MuiTableBody-root .MuiTableRow-root:last-of-type .MuiTableCell-root:not(:first-of-type)': {
        color: '#FE4300',
        fontWeight: 600,
      },
    },
    () => console.log('Breakdown of New Tickets')
  ),
  createChartCardTableConfig(
    'Top Reasons for Creating Tickets',
    ['Reason', '%'],
    [
      ['Adhoc Request', '64.29%'],
      ['AIF', '21.43%'],
      ['Batch', '14.29%'],
      ['No Error Code', '0.00%'],
    ],
    {
      '& .MuiTableRow-root': { textAlign: 'left', height: '38px' },
      '& .MuiTableCell-root': { height: '36px', padding: '0 16px', textAlign: 'center', lineHeight: '14px', fontSize: '12px' },
    },
    () => console.log('Top Reasons for Creating Tickets')
  ),
];

// Theme configuration
export const snowDashboadTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Set Roboto as the font
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: defaultChartCardTableStyles,
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
          },
        },
      },
    },
  },
});

// Dummy data for NewAndClosedTicketCountChart
export const legendItemsFirstChart = [
  {
    label: 'New Ticket',
  },
  {
    label: 'Closed Ticket',
    fill: theme.palette.chart.secondary,
  }
];

// get chart ticks based on max value
export const getChartTicks = (maxValue, step = 50) => Array.from({ length: Math.ceil(maxValue / step) + 1 }, (_, i) => i * step);

// centralize chart configurations
export const chartConfig = {
  cartesianGrid: {
    vertical: false,
    strokeDasharray: "1",
  },
  xAxis: (props) => ({
    axisLine: false,
    tickLine: false,
    ...theme.typography.chart,
    ...props,
  }),
  yAxis: (props) => ({
    yAxisId: 'left',
    width: 35,
    axisLine: false,
    tickLine: false,
    stroke: theme.palette.chart.primary,
    ...theme.typography.chart,
    ...props,
    label: props.label ? <CustomChartLabel {...props} /> : null,
  }),
  tooltip: {
    // content: (props) => <CustomChartTooltip {...props} />,
  },
  legend: (items) => ({
    content: <CustomChartLegend items={items} />,
  }),
  bar: (props) => ({
    yAxisId: 'left',
    barSize: 40,
    fill: theme.palette.chart.primary,
    radius: 4,
    children: props.labelList && (
      <LabelList
        dataKey={props.dataKey}
        position="center"
        fill="#fff"
        {...theme.typography.chart}
        dy={12}
      />
    ),
    shape: props.shapeProps && (
      <CustomBar {...props} />
    ),
    ...props,
  }),
  line: (props) => ({
    yAxisId: 'left',
    type: "monotone",
    stroke: theme.palette.chart.primary,
    strokeWidth: 2,
    dot: false,
    ...props,
    activeDot: props.activeDot && (
      <CustomChartActiveDot />
    ),
  }),
  area: (props) => ({
    yAxisId: 'left',
    axisLine: false,
    type: 'monotone',
    stroke: theme.palette.chart.secondary,
    strokeWidth: 3,
    dot: {
      strokeWidth: 2,
      stroke: theme.palette.dotChart.secondary,
      fill: theme.palette.dotChart.primary,
      r: 6
    },
    activeDot: { r: 6 },
    fillOpacity: 1,
    fill: props.fill || 'url(#colorLineChart)',
    children: (
      <LabelList
        dataKey={props.dataKey}
        position="center"
        fill="#000"
        dx={25}
        {...theme.typography.chart}
        activeDot={{ r: 6 }}
      />
    ),
    ...props,
  }),
};

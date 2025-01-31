import config from "../../config/config";

export const TicketTypeOptions = Object.freeze({
  ALL: { value: 'ALL', label: 'All' },
  INC: { value: 'INC', label: 'Incident' },
  CHG: { value: 'CHG', label: 'Change Req' },
});

export const TicketKeys = Object.freeze({
  OPENED_TICKET: "OPENED_TICKET",
  CLOSED_TICKET: "CLOSED_TICKET",
  IN_PROGRESS_TICKET: "IN_PROGRESS_TICKET",
  MEAN_TIME_RESOLVE: "MEAN_TIME_RESOLVE",
  SLA_CLOSED_TICKET: "SLA_CLOSED_TICKET",
});

export const dummyData = {
  [TicketKeys.OPENED_TICKET]: { number: 48, vsLW: 6.67 },
  [TicketKeys.CLOSED_TICKET]: { number: 16, vsLW: -37.50 },
  [TicketKeys.IN_PROGRESS_TICKET]: { number: 32, vsLW: 146.15 },
  [TicketKeys.MEAN_TIME_RESOLVE]: { number: 2.36, vsLW: 26.85 },
  [TicketKeys.SLA_CLOSED_TICKET]: { number: 75.00, vsLW: -4.55 },
};

export const INITIAL_TICKET_DATA = {
  [TicketKeys.OPENED_TICKET]: {
    title: "Open Tickets",
    openCount: undefined,
    vsLW: undefined,
    baseUrl: config[process.env.REACT_APP_ENV].openTktsUrl
  },
  [TicketKeys.CLOSED_TICKET]: {
    title: "Closed Tickets",
    closedCount: undefined,
    vsLW: undefined,
    baseUrl: config[process.env.REACT_APP_ENV].closedTktCount
  },
  [TicketKeys.IN_PROGRESS_TICKET]: {
    title: "In Progress Tickets",
    InProgressCount: undefined,
    vsLW: undefined,
    baseUrl: config[process.env.REACT_APP_ENV].inProgTktsUrl
  },
  [TicketKeys.MEAN_TIME_RESOLVE]: {
    title: "Mean Time To Resolve (Days)",
    MTTR: undefined,
    vsLW: undefined,
    baseUrl: config[process.env.REACT_APP_ENV].mttrUrl
  },
  [TicketKeys.SLA_CLOSED_TICKET]: {
    title: "SLA Closed Tickets %",
    SLAClosedPer: undefined,
    vsLW: undefined,
    baseUrl: config[process.env.REACT_APP_ENV].slaClosedTktsUrl
  },
};

export const getSummaryCardsDummyData = () => ({
  [TicketKeys.OPENED_TICKET]: {
    title: "Open Tickets",
    openCount: Math.floor(Math.random() * 100), // Random number for openCount
    vsLW: (Math.random() * 10).toFixed(2), // Random value for vsLW between 0 and 10, rounded to 2 decimal places
  },
  [TicketKeys.CLOSED_TICKET]: {
    title: "Closed Tickets",
    closedCount: Math.floor(Math.random() * 100), // Random number for closedCount
    vsLW: (Math.random() * 10).toFixed(2), // Random value for vsLW between 0 and 10, rounded to 2 decimal places
  },
  [TicketKeys.IN_PROGRESS_TICKET]: {
    title: "In Progress Tickets",
    InProgressCount: Math.floor(Math.random() * 100), // Random number for InProgressCount
    vsLW: (Math.random() * 10).toFixed(2), // Random value for vsLW between 0 and 10, rounded to 2 decimal places
  },
  [TicketKeys.MEAN_TIME_RESOLVE]: {
    title: "Mean Time To Resolve (Days)",
    MTTR: (Math.random() * 10).toFixed(3), // Random MTTR value between 0 and 10, rounded to 3 decimal places
    vsLW: (Math.random() * 10).toFixed(2), // Random value for vsLW between 0 and 10, rounded to 2 decimal places
  },
  [TicketKeys.SLA_CLOSED_TICKET]: {
    title: "SLA Closed Tickets %",
    SLAClosedPer: (Math.random() * 100).toFixed(2), // Random SLA percentage between 0 and 100, rounded to 2 decimal places
    vsLW: (Math.random() * 10).toFixed(2), // Random value for vsLW between 0 and 10, rounded to 2 decimal places
  },
});

export const generateRandomDataChartTwo = () => {
  const weeks = ['FW42', 'FW43', 'FW44']; // You can add more weeks as needed
  return weeks.map((week) => ({
    week,
    newTicket: Math.floor(Math.random() * 50), // Random number between 0 and 49
    mttr: (Math.random() * 5).toFixed(3), // Random MTTR between 0 and 5, rounded to 3 decimal places
  }));
};

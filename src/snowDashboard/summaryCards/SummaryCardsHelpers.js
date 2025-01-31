import { TicketKeys } from "../helpers/snowHelpers";

export const styleMap = {
  [TicketKeys.OPENED_TICKET]: {
    backgroundColor: "#E2F8FF",
    borderColor: "#8DD1E8",
  },
  [TicketKeys.CLOSED_TICKET]: {
    backgroundColor: "#FFF3E3",
    borderColor: "#EAD7BE",
  },
  [TicketKeys.IN_PROGRESS_TICKET]: {
    backgroundColor: "#FFCDDF",
    borderColor: "#F7B1CA",
  },
  [TicketKeys.SLA_CLOSED_TICKET]: {
    backgroundColor: "#DDEAFF",
    borderColor: "#B8CDEF",
  },
  [TicketKeys.MEAN_TIME_RESOLVE]: {
    backgroundColor: "#DBFFEE",
    borderColor: "#ABE6CA",
  },
};


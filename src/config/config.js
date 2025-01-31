const config = {
  development: {
    openTktsUrl: "https://dev.example.com/open-tickets",
    closedTktCount: "https://dev.example.com/closed-tickets-count",
    inProgTktsUrl: "https://dev.example.com/in-progress-tickets",
    mttrUrl: "https://dev.example.com/mean-time-to-resolve",
    slaClosedTktsUrl: "https://dev.example.com/sla-closed-tickets"
  },
  staging: {
    openTktsUrl: "https://staging.example.com/open-tickets",
    closedTktCount: "https://staging.example.com/closed-tickets-count",
    inProgTktsUrl: "https://staging.example.com/in-progress-tickets",
    mttrUrl: "https://staging.example.com/mean-time-to-resolve",
    slaClosedTktsUrl: "https://staging.example.com/sla-closed-tickets"
  },
  production: {
    openTktsUrl: "https://www.example.com/open-tickets",
    closedTktCount: "https://www.example.com/closed-tickets-count",
    inProgTktsUrl: "https://www.example.com/in-progress-tickets",
    mttrUrl: "https://www.example.com/mean-time-to-resolve",
    slaClosedTktsUrl: "https://www.example.com/sla-closed-tickets"
  }
};


export default config;
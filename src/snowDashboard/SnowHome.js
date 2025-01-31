import React from "react";
import DateRangeSelectorSnow from "./dateRangeSelectorSnow/DateRangeSelectorSnow";
import { ProvideSnowDashboard } from "../Hooks/useSnowDashboard";
import SummaryCards from "./summaryCards/SummaryCards";
import SummaryCharts from "./charts/SummaryCharts";
import { ThemeProvider, Typography } from "@mui/material";
import "./snow.css";
import { snowDashboadTheme } from "./charts/SummaryChartsHelpers";

const SnowHome = () => {
  return (
    <main id="snow-main-content">
      <ThemeProvider theme={snowDashboadTheme}>
        <Typography
          variant="h3"
          fontWeight={500}
          marginBottom={2}
        >
          My Metrics Dashboard
        </Typography>
        <Typography
          variant="h5"
          fontWeight={500}
          marginBottom={2}
        >
          Change metric type to update data ↓
        </Typography>
        <ProvideSnowDashboard>
          <DateRangeSelectorSnow />
          <SummaryCards />
          <SummaryCharts />
        </ProvideSnowDashboard>
      </ThemeProvider>
    </main >
  );
}

export default SnowHome;

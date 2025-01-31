import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import { theme } from "../../snowDashboard/helpers/theme";

const ChartWrapper = (props) => {
  const {
    data,
    children,
  } = props;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="colorLineChart" x1="0" y1="0" x2="0" y2="1">
            <stop offset="35%" stopColor={theme.palette.chart.secondary} stopOpacity={0.16} />
            <stop offset="100%" stopColor={theme.palette.chart.secondary} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="bars" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCFCFD" stopOpacity="0" />
            <stop offset="100%" stopColor="#969697" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="selectedBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCFCFD" stopOpacity="0" />
            <stop offset="100%" stopColor="#34B3F1" stopOpacity="0.26" />
          </linearGradient>
        </defs>

        {/* Chart components */}
        {children}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ChartWrapper;

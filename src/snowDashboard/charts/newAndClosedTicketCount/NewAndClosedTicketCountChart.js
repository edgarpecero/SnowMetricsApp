import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Bar,
} from 'recharts';
import { theme } from '../../helpers/theme';
import CustomChartLegend from '../../../component/chartWrapper/CustomChartLegend';
import { getChartTicks, chartConfig, legendItemsFirstChart } from '../SummaryChartsHelpers';
import React from 'react';
import CustomChartTooltip from '../../../component/chartWrapper/CustomChartTooltip';
import ChartWrapper from '../../../component/chartWrapper/ChartWrapper';
import { useSnowDashboard } from '../../../Hooks/useSnowDashboard';
import { useFetchNewAndClosedTicketCount } from '../../apiCall';

const NewAndClosedTicketCountChart = () => {
  const { chartFilters } = useSnowDashboard();
  const { data } = useFetchNewAndClosedTicketCount(chartFilters);

  // Get the maximum value for the ticks
  const maxValueForTicks = 
    Math.max(...data.map(item => Math.max(item.newTicketCount, item.closedTicketCount)));

  // Get ticks for the chart, step is 50 by default
  const ticks = getChartTicks(maxValueForTicks, 50);

  return (
    <ChartWrapper data={data}>
      <CartesianGrid {...chartConfig.cartesianGrid} strokeDasharray={5} />
      <XAxis {...chartConfig.xAxis({ dataKey: 'date' })} />
      <YAxis
        {...chartConfig.yAxis({
          yAxisId: 'left',
          label: 'New Ticket Count',
          ticks: ticks,
        })}
      />
      <YAxis
        {...chartConfig.yAxis({
          yAxisId: 'right',
          orientation: 'right',
          label: 'Closed Ticket Count',
          stroke: theme.palette.chart.secondary,
          labelProps: {
            fill: theme.palette.chart.secondary,
            offsetX: 22,
          },
          ticks: ticks,
        })}
      />
      <Tooltip content={<CustomChartTooltip />} />
      <Legend content={<CustomChartLegend items={legendItemsFirstChart} />} />
      <Bar {...chartConfig.bar({
        yAxisId: 'left',
        dataKey: 'barChart',
        barSize: 18,
        fill: 'url(#bars)',
        shapeProps: { onHoverColor: 'url(#selectedBar)' }
      })}
      />
      <Line {...chartConfig.line({
        yAxisId: 'left',
        dataKey: 'newTicketCount',
        activeDot: true,
      })} />
      <Line {...chartConfig.line({
        dataKey: 'closedTicketCount',
        yAxisId: 'right',
        stroke: theme.palette.chart.secondary,
        activeDot: true,
      })}
      />
    </ChartWrapper>
  );
};

export default React.memo(NewAndClosedTicketCountChart);

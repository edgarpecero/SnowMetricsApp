import { Bar, CartesianGrid, XAxis, YAxis, Area, Legend } from 'recharts';
import { chartConfig, getChartTicks } from '../SummaryChartsHelpers';
import ChartWrapper from '../../../component/chartWrapper/ChartWrapper';
import { getMaxValueByProperty } from '../../../helpers/utils';
import { useSnowDashboard } from '../../../Hooks/useSnowDashboard';
import { useFetchNewTicketCountAndMttr } from '../../apiCall';

const NewTicketCountAndMttrChart = () => {
  const { chartFilters } = useSnowDashboard();
  const { data } = useFetchNewTicketCountAndMttr(chartFilters);

  // Get the maximum value for the ticks
  const maxValueForTicks = getMaxValueByProperty(data, 'newTicket');
  // Get ticks for the chart, step is 5 by default
  const ticks = getChartTicks(maxValueForTicks, 5);

  return (
    <ChartWrapper data={data}>
      <CartesianGrid {...chartConfig.cartesianGrid} />
      <XAxis {...chartConfig.xAxis({ dataKey: 'week' })} />
      <YAxis
        {...chartConfig.yAxis({
          label: 'New Ticket Count',
          ticks: ticks,
        })}
      />
      <YAxis yAxisId='right' hide />
      <Legend {...chartConfig.legend([{ label: 'New Ticket Count' }])} />
      <Bar {...chartConfig.bar({ dataKey: 'newTicket', labelList: true })} />
      <Area {...chartConfig.area({ yAxisId: 'right', dataKey: 'mttr' })} />
    </ChartWrapper>
  );
};

export default NewTicketCountAndMttrChart;

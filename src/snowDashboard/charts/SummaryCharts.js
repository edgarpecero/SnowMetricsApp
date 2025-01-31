import styles from './SummaryCharts.module.css';
import ChartCard from "./common/ChartCard";
import { chartComponentsRowOne, chartComponentsRowTwo } from './SummaryChartsHelpers';

const renderChartRow = (chartRow) => (
  chartRow.map(({ component: ChartComponent, chartProps }, index) => (
    <ChartCard key={index} {...chartProps}>
      <ChartComponent {...chartProps} />
    </ChartCard>
  ))
);

const SummaryCharts = () => (
  <div className={styles['summary-charts-container']}>
    {[chartComponentsRowOne, chartComponentsRowTwo].map((chartRow, rowIndex) => (
      <div className={styles['chart-row-container']} key={rowIndex}>
        {renderChartRow(chartRow)}
      </div>
    ))}
  </div>
);

export default SummaryCharts;

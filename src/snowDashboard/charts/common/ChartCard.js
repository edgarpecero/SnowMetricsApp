import styles from '../SummaryCharts.module.css';
import infoChartIconVector from '../../../icons/infoChartIconVector.svg';

const InfoIconSVG = () => (
  <img
    width={20}
    height={20}
    src={infoChartIconVector}
    alt='infoChartIconVector'
  />
);

const ChartCard = (props) => {
  const { children, title, onMoreDetailsClick, hideIcon = false } = props;
  return (
    <div className={styles['chart-card-wrapper']}>
      <div style={{ visibility: hideIcon ? 'hidden' : 'visible' }}>
        <InfoIconSVG />
      </div>
      <p className={styles['chart-title']}>{title}</p>
      {children}
      {onMoreDetailsClick && (
        <button
          className={styles['more-details-button']}
          onClick={onMoreDetailsClick}
        >
          More Details
        </button>
      )}
    </div>
  );
}

export default ChartCard;

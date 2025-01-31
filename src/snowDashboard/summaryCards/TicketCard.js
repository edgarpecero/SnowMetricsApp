import IndicatorArrowIcon from '../../component/icons/IndicatorArrowIcon';
import { TicketKeys } from '../helpers/snowHelpers';
import { styleMap } from './SummaryCardsHelpers';
import styles from './TicketCard.module.css';
import TicketCardBackgroundSVG from './TicketCardBackgroundSVG';

const TicketCard = ({ ticketKey, ticket, onClick, loaded }) => {
  const { backgroundColor, borderColor } = styleMap[ticketKey];

  const findUniqueProperty = (obj) => {
    const commonProperties = ['title', 'vsLW']; // Common properties in all objects
    return Object.keys(obj).find((key) => !commonProperties.includes(key));
  };
  const uniqueProp = findUniqueProperty(ticket);
  let value = ticket[uniqueProp];

  // Determine the direction of IndicatorArrowIcon on the value of vsLW
  const direction = parseFloat(ticket.vsLW) > 0 ? 'up' : 'down';

  // Format the value for SLA Closed Tickets to show percentage
  if (ticketKey === TicketKeys.SLA_CLOSED_TICKET && value) {
    value = `${parseFloat(ticket[uniqueProp]).toFixed(2)}%`;
  }

  return (
    <div
      className={styles['ticket-card']}
      onClick={() => onClick && onClick(ticket)}
      style={{ backgroundColor, borderColor }}
    >
      <div className={styles['data-container']}>
        <p className={styles['title']}>{ticket.title.toUpperCase()}</p>
        <p className={styles['number']}>
          {!loaded ? 'Loading...' : value}
          {ticketKey === TicketKeys.MEAN_TIME_RESOLVE && value && (
            <span className={styles['days-card-word']}>days</span>
          )}
        </p>
        {value && (
          <div className={styles['percentage-container']}>
            <IndicatorArrowIcon direction={direction} />
            <p className={styles['percentage']}>{ticket.vsLW || 0}%(vsLW)</p>
          </div>
        )}
        <TicketCardBackgroundSVG />
      </div >
    </div >
  )
};

export default TicketCard;

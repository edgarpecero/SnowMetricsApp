import TicketCardBgVector from '../../icons/TicketCardBgVector.svg';
import styles from './TicketCard.module.css';

const TicketCardBackgroundSVG = ({ size }) => (
  <img
    width={size || 235}
    height={size || 165}
    src={TicketCardBgVector}
    alt='TicketCardBgVector'
    className={styles['ticket-card-bg-svg']}
  />
);

export default TicketCardBackgroundSVG;

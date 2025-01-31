import { useSnowDashboard } from "../../Hooks/useSnowDashboard";
import { useFetchAllTicketData } from "../apiCall";
import TicketCard from "./TicketCard";
import styles from './TicketCard.module.css';

const SummaryCards = () => {
  const { chartFilters } = useSnowDashboard();
  const { ticketData, loaded } = useFetchAllTicketData(chartFilters);

  return (
    <div className={styles['summary-cards-container']}>
      {Object.entries(ticketData).map(([key, ticket]) => (
        <TicketCard
          key={key}
          loaded={loaded}
          ticketKey={key}
          ticket={ticket}
        />
      ))}
    </div>
  )
};

export default SummaryCards;

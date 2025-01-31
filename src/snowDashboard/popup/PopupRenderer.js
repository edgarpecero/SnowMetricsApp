import ClosedTktPopup from "./ClosedTktPopup";
import InProgTktPopup from "./InProgTktPopup";
import OpenedTktPopup from "./OpenedTktPopup";
import SlaClosedPopup from "./SlaClosedPopup";

const PopupRenderer = ({ popupInfo, handleClosePopup, startDate, endDate, ticketType }) => {
  const { show, ticket } = popupInfo;
  if (!show) return null;

  // Mapping of popup types to their corresponding components
  const popupComponents = {
    OPENED_TICKET: OpenedTktPopup,
    CLOSED_TICKET: ClosedTktPopup,
    IN_PROGRESS_TICKET: InProgTktPopup,
    SLA_CLOSED_TICKET: SlaClosedPopup,
  };

  // Get the component for the popup type
  const PopupComponent = popupComponents[ticket.popupType];
  if (!PopupComponent) return null;

  return (
    <PopupComponent
      ticketId={ticket.ticketId}
      onClose={handleClosePopup}
      startDate={startDate}
      endDate={endDate}
      ticketType={ticketType}
    />
  );
};

export default PopupRenderer;

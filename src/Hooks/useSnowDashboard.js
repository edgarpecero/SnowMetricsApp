import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
  format,
  startOfWeek,
  endOfWeek,
  subWeeks,
  addWeeks,
} from "date-fns";
import { TicketTypeOptions } from "../snowDashboard/helpers/snowHelpers";

const startDate = format(startOfWeek(new Date()), 'yyyy-MM-dd');
const endDate = format(endOfWeek(new Date()), 'yyyy-MM-dd');
const SnowContext = createContext({});

export const useSnowDashboard = () => {
  return useContext(SnowContext);
}

export const ProvideSnowDashboard = React.memo((props) => {
  const value = useProvideSnowDashboard(props);
  return (
    <SnowContext.Provider value={value}>
      {props.children}
    </SnowContext.Provider>
  );
});

const useProvideSnowDashboard = () => {
  // states
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [ticketType, setTicketType] = useState(TicketTypeOptions.ALL.value);
  const chartFilters = useMemo(() => ({
    startDate,
    endDate,
    ticketType,
  }), [startDate, endDate, ticketType]);

  // handlers
  const handlePrevWeek = useCallback(() => {
    setCurrentWeek((prevWeek) => subWeeks(prevWeek, 1));
  }, []);

  const handleNextWeek = useCallback(() => {
    setCurrentWeek((prevWeek) => addWeeks(prevWeek, 1));
  }, []);

  return {
    chartFilters,
    startDate,
    endDate,
    ticketType,
    setTicketType,
    currentWeek,
    handleNextWeek,
    handlePrevWeek,
  }
}

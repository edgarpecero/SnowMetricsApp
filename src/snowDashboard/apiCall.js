import { useCallback, useEffect, useState } from "react";
import { generateRandomDataChartTwo, getSummaryCardsDummyData, INITIAL_TICKET_DATA } from "./helpers/snowHelpers";
import { buildApiUrl, formatDatesToMMDD } from "../helpers/utils";

// Helper function to build the URL
const getUrl = (baseUrl, { startDate, endDate, ticketType, page }) =>
  buildApiUrl(baseUrl, { startDate, endDate, ticketType, page });

export const useFetchNewAndClosedTicketCount = (props) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const dateRange = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(Date.now() - i * 86400000); // Subtract days
    const formattedDate = `${date.getFullYear()} ${String(date.getMonth() + 1).padStart(2, '0')} ${String(date.getDate()).padStart(2, '0')}`;
    return {
      date: formattedDate,
    };
  });
  // Mock function to fetch data with a 1-second delay
  const mockFetch = async () => {
    try {
      // Simulate a delay of 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Map over the data and add newTicketCount and closedTicketCount
      const updatedData = dateRange.map((date) => ({
        ...date,
        barChart: 200,
        newTicketCount: Math.floor(Math.random() * 200),  // Random data for newTicketCount
        closedTicketCount: Math.floor(Math.random() * 200), // Random data for closedTicketCount
      }));

      setData(updatedData); // Set the data after mapping
      setLoaded(true); // Set loaded to true
    } catch (error) {
      setError(error); // Handle error
      setLoaded(true);
    }
  };

  useEffect(() => {
    mockFetch(); // Call the mockFetch function when the component mounts
  }, [props.ticketType]);

  return {
    data: formatDatesToMMDD(data || []),
    error,
    loaded,
    getNewAndClosedTicketCount: mockFetch, // Optional: Return fetch function for manual re-fetching
  };
}

export const useFetchNewTicketCountAndMttr = (props) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const mockFetch = async () => {
    try {
      // Simulate a delay of 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setData(generateRandomDataChartTwo()); // Set the dummyData
      setLoaded(true); // Set loaded to true
    } catch (error) {
      setError(error); // Handle error
      setLoaded(true);
    }
  };

  useEffect(() => {
    mockFetch(); // Call the mockFetch function when the component mounts
  }, [props.ticketType]);

  return {
    data,
    error,
    loaded,
    getNewTicketCountAndMttr: mockFetch, // Optional: Return fetch function for manual re-fetching
  };
}


export const useFetchAllTicketData = (props) => {
  const { loadOnMount = true, ticketType } = props;
  const [ticketData, setTicketData] = useState(INITIAL_TICKET_DATA); // Make sure INITIAL_TICKET_DATA is defined somewhere
  const [loaded, setLoaded] = useState(null);
  const [error, setError] = useState(null);
  const method = 'GET';

  // Fetch all data function
  const fetchAllData = useCallback(async (props) => {
    setLoaded(false);
    new Promise(async (resolve, reject) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 sec delay

        // Process results by updating ticketData
        const newTicketData = Object.keys(ticketData).reduce((acc, key) => {
          acc[key] = {
            ...getSummaryCardsDummyData()[key], // Mock data for each ticket key
            title: ticketData[key].title,   // Add the actual title from ticketData
          };
          return acc;
        }, {});

        // Update the state with newTicketData
        setTicketData(newTicketData);
        resolve(newTicketData);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(true);
      }
    });
  }, [ticketData]); // Added ticketData as dependency

  // Fetch data on mount or when props.ticketType changes
  useEffect(() => {
    if (loadOnMount) {
      (async () => {
        await fetchAllData(props); // Trigger fetch when the ticketType changes
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadOnMount, ticketType]); // Trigger the effect when props.ticketType changes

  return {
    ticketData,
    loaded,
    error,
    fetchAllData, // Optional: Allow manual re-fetching if needed
  };
};

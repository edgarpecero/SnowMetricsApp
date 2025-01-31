// function converts an object to a query string
export const objectToSearchParams = (paramsObject = {}) =>
  Object.entries(paramsObject || {})
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

// function to merge two objects
export const mergeObjects = (obj1, obj2) => {
  return Object.keys({ ...obj1, ...obj2 }).reduce((merged, key) => {
    merged[key] = {
      ...(obj1[key] || {}), // Add properties from the first object
      ...(obj2[key] || {}), // Add properties from the second object
    };
    return merged;
  }, {});
};

// function to get the maximum value of a property in an array of objects
export const getMaxValueByProperty = (data, property) => {
  if (!Array.isArray(data) || data.length === 0 || !property || typeof property !== "string") {
    return [];
  }

  return Math.max(...data.map(item => item[property]));
};

// function to format dates to MM/DD
export const formatDatesToMMDD = (arr) => {
  return arr.map((obj) => ({ ...obj, date: formatDateToMMDD(obj.date) }));
}

// function to format dates for the chart
const formatDateToMMDD = (dateString) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}/${day}`;
};

// function that returns an array of formatted dates
export const generateDateRange = (startDate, endDate) => {
  const dateArray = [];

  let start = new Date(startDate);
  const end = new Date(endDate);

  while (start <= end) {
    // Format the current date to MM/DD (in UTC)
    const formattedDate = `${start.getUTCMonth() + 1}/${start.getUTCDate()}`;
    dateArray.push(formattedDate);

    // Increment the date by 1 day
    start.setUTCDate(start.getUTCDate() + 1);
  }

  return dateArray;
};

// function to build an API URL with query parameters
export const buildApiUrl = (baseUrl, params = {}) => {
  // Generate query string from params object
  const queryString = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  // Construct the full URL
  return `${baseUrl}?${queryString}`;
};
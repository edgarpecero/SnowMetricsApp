const red = '#B60A1C';
const yellow = '#F28E2B ';
const green = '#59A14F';

const StarIcon = ({ row, key = 'slaPercent' }) => {
  const valueNumber = parseFloat(row[key] || 0);
  let color = green;
  switch (true) {
    case valueNumber === 100:
      color = red;
      break;
    case valueNumber < 70:
      color = yellow;
      break;
    case 70 < valueNumber < 100:
      color = green;
      break;
  }

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9.46955 5.97734L8 1.45455L6.53045 5.97734H1.7749L5.62222 8.77259L4.15268 13.2954L8 10.5001L11.8473 13.2954L10.3778 8.77259L14.2251 5.97734H9.46955Z" fill={color} />
    </svg>
  )
}

export default StarIcon;

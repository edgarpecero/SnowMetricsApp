const IndicatorArrowIcon = ({ direction = 'up' }) => {
  const isUp = direction === 'up';

  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={isUp
          ? 'M5 0L9.33013 7.5H0.669873L5 0Z' // Arrow Up
          : 'M5 8L9.33013 0.5H0.669873L5 8Z' // Arrow Down
        }
        fill="#C93305"
      />
    </svg>
  )
};

export default IndicatorArrowIcon;

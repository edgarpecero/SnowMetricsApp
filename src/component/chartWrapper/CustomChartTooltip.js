import { useSharedState } from "../../Hooks/useSharedState";

const CustomChartTooltip = (props) => {
  const { active, payload, coordinate } = props;
  const [sharedState] = useSharedState();

  if (active && sharedState) {
    const value = payload.find(item => item.dataKey === sharedState.dataKey)?.value;
    const { x, y } = coordinate;

    return (
      <div
        style={{
          position: 'absolute',
          left: x, // Ensuring it is centered horizontally
          top: y - 35, // Move above the cursor
          transform: 'translateX(-50%)', // Center the tooltip horizontally
          pointerEvents: 'none', // Prevent this div from capturing mouse events
        }}
      >
        <div style={{ position: 'relative', width: '44px', height: '29px' }}>
          {/* SVG with the rectangle and the path */}
          <svg width="44" height="29" viewBox="0 0 44 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.662842" y="0.982727" width="43" height="23" rx="11.5" fill="#333333" />
            <path d="M23.0768 27.9249C22.725 28.717 21.6007 28.717 21.2489 27.9249L18.4571 21.6386C18.1634 20.9774 18.6475 20.2327 19.371 20.2327L24.9547 20.2327C25.6782 20.2327 26.1623 20.9774 25.8686 21.6386L23.0768 27.9249Z" fill="#292D30" />
          </svg>

          {/* Text with the value centered above the SVG */}
          <div
            style={{
              position: 'absolute',
              top: 6,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '10px',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            {value}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default CustomChartTooltip;

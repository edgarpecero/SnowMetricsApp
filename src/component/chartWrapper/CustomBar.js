import { useEffect, useState } from 'react';
import { useSharedState } from '../../Hooks/useSharedState';

const CustomBar = (props) => {
  const { x, y, width, height, fill, shapeProps, index } = props;
  const { onHoverColor } = shapeProps;
  const [sharedState] = useSharedState();
  const [barColor, setBarColor] = useState(fill);

  const handleBarMouseEnter = () => setBarColor(onHoverColor);

  const handleBarMouseLeave = () => setBarColor(fill);

  useEffect(() => {
    if (sharedState && sharedState.index === index) {
      setBarColor(onHoverColor);
    }
  }, [sharedState, props.dataKey, onHoverColor, index]);

  return (
    <>
      {/* Visible rectangle */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={barColor}
        radius={4}
      />

      {/* Invisible extended area for interaction */}
      <rect
        x={x - 13}
        y={y}
        width={width + 27}
        height={height + 10}
        fill="transparent"
        pointerEvents={'all'}
        onMouseEnter={handleBarMouseEnter}
        onMouseLeave={handleBarMouseLeave}
      />
    </>
  );
};

export default CustomBar;

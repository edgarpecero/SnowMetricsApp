import { useCallback } from "react";
import { useSharedState } from "../../Hooks/useSharedState";

const CustomChartActiveDot = (props) => {
  const [, setSharedState] = useSharedState();
  const { cx, cy, fill } = props;

  const onMouseEnter = useCallback((e) => {
    setSharedState(props);
  }, [props, setSharedState]);

  const onMouseLeave = useCallback(() => {
    setSharedState(null);
  }, [props, setSharedState]);

  const interactionRadius = 8;

  return (
    <>
      <circle
        cx={cx} cy={cy} r={6} fill={fill} strokeWidth="1px" stroke="#FFF" />
      <circle
        cx={cx} cy={cy} r={interactionRadius} fill="transparent" // Interaction Area
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </>
  );
};

export default CustomChartActiveDot;

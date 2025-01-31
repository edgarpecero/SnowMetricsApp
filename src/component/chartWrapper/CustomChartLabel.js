import { theme } from "../../snowDashboard/helpers/theme";

const CustomChartLabel = ({ viewBox, label, labelProps }) => {
  const { fill, angle = -90, offsetX = -12, offsetY = 0 } = labelProps || {};
  const { x, y, height, width } = viewBox; // Extract dimensions from viewBox
  const centerX = x + width / 2 + offsetX; // Center horizontally
  const centerY = y + height / 2 + offsetY; // Center vertically

  return (
    <text
      x={centerX}
      y={centerY}
      transform={`rotate(${angle}, ${centerX}, ${centerY})`} // Rotate the label 
      textAnchor="middle"
      style={{
        fill: fill || theme.palette.chart.primary,
        fontSize: '11px',
        fontWeight: '700',
      }}
    >
      {label}
    </text>
  );
};


export default CustomChartLabel;

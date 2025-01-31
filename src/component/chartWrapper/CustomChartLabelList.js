import { LabelList } from "recharts";

const CustomChartLabelList = (props) => {
  const { x, y, value, ...rest } = props;
  return (
    <LabelList
      dataKey={props.dataKey}
      position={'center'}
      {...rest}
      content={(
        <text
          x={x}
          y={y}
          dy={-6}
          fill="#fff"
          fontSize="12px"
          textAnchor="middle"
        >
          {value}
        </text>
      )} />
  );
}

export default CustomChartLabelList;

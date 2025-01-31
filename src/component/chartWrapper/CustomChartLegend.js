import { theme } from "../../snowDashboard/helpers/theme";

const CustomChartLegend = ({ items }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      {items.map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: item.fill || theme.palette.chart.primary, 
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></span>
          <span style={{ fontSize: "13px", color: item.textColor || "#333" }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomChartLegend;

import React, { memo } from 'react';

const CustomActiveDot = memo((props) => {
  const { cx, cy, payload, fill, dataKey, activeTooltip } = props;  // cx, cy are the coordinates of the active dot, and payload contains the data of that point
  console.log('CustomActiveDot');

  // Adjust the coordinates of the SVG so that the dot is centered
  const svgX = cx - 22; // Adjust the horizontal position of the SVG
  const svgY = cy - 40; // Adjust the vertical position of the SVG
  const showValue = activeTooltip === dataKey;

  return showValue ? (
    <>
      <circle cx={cx} cy={cy} r={6} fill={fill} strokeWidth='1px' stroke="#FFF" />
      <g
        transform={`translate(${svgX}, ${svgY})`}
        pointerEvents="all"  // Ensure it can capture mouse events
      >
        <svg width="44" height="29" viewBox="0 0 44 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.662842" y="0.982727" width="43" height="23" rx="11.5" fill="#333333" />
          <path d="M23.0768 27.9249C22.725 28.717 21.6007 28.717 21.2489 27.9249L18.4571 21.6386C18.1634 20.9774 18.6475 20.2327 19.371 20.2327L24.9547 20.2327C25.6782 20.2327 26.1623 20.9774 25.8686 21.6386L23.0768 27.9249Z" fill="#292D30" />
        </svg>
        <text x="22" y="16" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold">
          {payload[dataKey]} {/* Render the value inside the SVG */}
        </text>
      </g>
    </>
  ) : null;
});

export default CustomActiveDot;

export default function CakePopLogo({
  textColor = "#e56b6f",
  backgroundColor = "#365071",
  width = 60,
  height = 60,
}) {
  const cx = 105.3776;
  const cy = 122.7443;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 153.64206 131.86919"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-28.933693,-56.809715)">
        <circle cx={cx} cy={cy} r="65.934586" fill={backgroundColor} />

        <text
          transform="matrix(0.60268406,0,0,0.60284081,-84.445379,-46.842776)"
          fontSize="85.6228px"
          fontFamily="Chillink"
          fill={backgroundColor}
        >
          <tspan x="189.12695" y="259.45417" fill={textColor}>
            Cake
          </tspan>
        </text>

        <text
          transform="matrix(0.60268406,0,0,0.60284081,-27.081134,-4.0339463)"
          fontSize="85.6228px"
          fontFamily="Chillink"
          fill={backgroundColor}
        >
          <tspan x="189.12695" y="259.45417" fill={textColor}>
            Pops
          </tspan>
        </text>

        <text
          x={cx}
          y={cy + 55}
          fontSize="10px"
          fontFamily="Comfortaa"
          textAnchor="middle"
          fill={textColor}
        >
          by Leanne
        </text>
      </g>
    </svg>
  );
}

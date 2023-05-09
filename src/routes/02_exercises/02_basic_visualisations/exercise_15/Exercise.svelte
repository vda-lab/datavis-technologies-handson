<script>
    const width = 100;
    const height = 100;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const cx = innerWidth / 2;
    const cy = innerHeight / 2;
    const size = 40
  </script>
  
  <svg {width} {height}>
    <g transform="translate({margin.left}, {margin.top})">
      <rect x={cx-size/2} y={cy-size/2} width={size} height={size} fill="yellow" />
      <circle cx={cx+size/2} cy={cy+size/2} r=20 fill="skyblue"/>
    </g>
  </svg>
  
  <style>
    svg {
      border: 1px solid black;
      border-radius: 5px;
    }
  </style>
  
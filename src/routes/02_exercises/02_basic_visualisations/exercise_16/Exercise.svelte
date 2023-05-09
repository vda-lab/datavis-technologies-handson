<script>
    const width = 800;
    const height = 100;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  </script>
  
  <svg viewbox="0 0 {width} {height}">
    <g transform="translate({margin.left}, {margin.top})">
      <circle cx={innerWidth / 2} cy={innerHeight / 2} r="20" fill="teal" />
    </g>
  </svg>
  
  <style>
    svg {
      border: 1px solid black;
      border-radius: 5px;
    }
  </style>
  
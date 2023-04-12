<script>
    const width = 100;
    const height = 100;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  </script>
  
 <svg {width} {height}>
    <g transform="translate({margin.left}, {margin.top})">
  <svg viewBox='0 0 10 10'>
  <circle cx=73% cy=73% r="2" fill="teal" />
  </svg>
  </g>
  </svg>
  
  <style>
    svg {
      border: 1px solid black;
      border-radius: 5px;
    }
  </style>
  
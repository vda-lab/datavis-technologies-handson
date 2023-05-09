<script>
  import { scaleLog } from "d3-scale";
  import { axisBottom } from "d3-axis";
  import { select } from "d3-selection";

  // Dimensions
  const width = 800;
  const height = 100;
  const margin = { top: 5, right: 5, bottom: 25, left: 5 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Array
  const values = [2, 4, 6, 7, 9];

  const xScale = scaleLog().domain([1, 10]).range([0, innerWidth]);
  const xAxis = (node) => axisBottom(xScale)(select(node));
</script>

<svg viewBox="0 0 {width} {height}">
  <g transform="translate({margin.left},{margin.top})">
    {#each values as value}
      <circle cx={xScale(value)} cy={innerHeight / 2} r="10" fill="steelblue" />
    {/each}
    <g use:xAxis transform="translate(0, {innerHeight})">
      <text x={innerWidth / 2} y="25" text-anchor="middle" fill="currentcolor">
        x label
      </text>
    </g>
  </g>
</svg>

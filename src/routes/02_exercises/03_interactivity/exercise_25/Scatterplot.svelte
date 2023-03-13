<script>
  import { extent } from "d3-array";
  import { select } from "d3-selection";
  import { scaleLinear } from "d3-scale";
  import { axisBottom, axisLeft } from "d3-axis";

  // Properties
  export let data = [];
  export let x = (d) => d.x;
  export let y = (d) => d.y;
  export let xLabel = "x";
  export let yLabel = "y";

  // Dimensions
  const width = 300;
  const height = 230;
  const margin = { top: 10, right: 10, bottom: 35, left: 45 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Scales
  const xScale = scaleLinear().domain(extent(data, x)).range([0, innerWidth]);
  const yScale = scaleLinear().domain(extent(data, y)).range([innerHeight, 0]);

  // Axes
  const xAxis = (node) => axisBottom(xScale)(select(node));
  const yAxis = (node) => axisLeft(yScale)(select(node));

  // Brushing
  // The range of the selection rectangle.
  // If there is no active selection, it contains: null,
  // otherwise, it contains: [ [x0, y0], [x1, y1] ]
  let range = null;
</script>

<svg viewBox="0 0 {width} {height}" class="mx-2" style="max-width: {width}px">
  <g transform="translate({margin.left},{margin.top})">
    <g>
      {#each data as d}
        <circle
          cx={xScale(x(d))}
          cy={yScale(y(d))}
          r={2}
          fill="steelblue"
          fill-opacity="0.5"
          stroke="steelblue"
          stroke-width="1.5"
          stroke-opacity="1"
        />
      {/each}
    </g>
    <g use:xAxis transform="translate(0, {innerHeight})">
      <text class="axisLabel" x={innerWidth / 2} y={margin.bottom - 5}
        >{xLabel}</text
      >
    </g>
    <g use:yAxis>
      <text
        class="axisLabel"
        y={-margin.left + 10}
        x={-innerHeight / 2}
        transform="rotate(-90)">{yLabel}</text
      >
    </g>
  </g>
</svg>

<style>
  .axisLabel {
    text-anchor: middle;
    vertical-align: bottom;
    fill: currentcolor;
  }
</style>

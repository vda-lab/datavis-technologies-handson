<script>
  import { select } from "d3-selection";
  import { axisBottom, axisLeft } from "d3-axis";
  import { scaleBand, scaleLinear } from "d3-scale";

  // Dimensions
  const width = 600;
  const height = 300;
  const margin = { top: 10, right: 10, bottom: 30, left: 60 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Array
  const data = [
    { service: "Netflix", viewers: 2.9 },
    { service: "Amazon Prime Video", viewers: 1.3 },
    { service: "Disney+", viewers: 2.1 },
    { service: "Hulu", viewers: 0.9 },
    { service: "Apple TV", viewers: 1.1 },
    { service: "Rakuten", viewers: 0.4 }
  ];

  const xScale = scaleBand()
    .domain(data.map((d) => d.service))
    .range([0, innerWidth])
    .padding(0.2);
  const yScale = scaleLinear().domain([0, 3]).range([innerHeight, 0]);

  const yAxis = (node) => axisLeft(yScale)(select(node));
  const xAxis = (node) => axisBottom(xScale)(select(node));
</script>

<!-- setting a viewBox and max-width allows the SVG to shrink but not grow! -->
<svg viewbox="0 0 {width} {height}" style="max-width: {width}px">
  <g transform={`translate(${margin.left},${margin.top})`}>
    {#each data as value}
      <rect
        x={xScale(value.service)}
        y={yScale(value.viewers)}
        width={xScale.bandwidth()}
        height={innerHeight - yScale(value.viewers)}
        fill="steelblue"
      />
    {/each}
    <g use:yAxis>
      <text class="ylabel" x={-innerHeight / 2} y={-margin.left / 2}>
        Viewers (Million)
      </text>
    </g>
    <g use:xAxis transform="translate(0,{innerHeight})" />
  </g>
</svg>

<style>
  .ylabel {
    text-anchor: middle;
    transform: rotate(-90deg);
    fill: currentcolor;
  }
</style>

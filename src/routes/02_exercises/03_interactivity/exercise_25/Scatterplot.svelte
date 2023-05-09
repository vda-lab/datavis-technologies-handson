<script>
  import { brush } from "d3-brush";
  import { extent } from "d3-array";
  import { select } from "d3-selection";
  import { scaleLinear } from "d3-scale";
  import { axisBottom, axisLeft } from "d3-axis";

  // Properties
  export let data = [];
  export let x = (d) => +d.Horsepower;
  export let y = (d) => +d.Acceleration;
  export let xLabel = "Horsepower";
  export let yLabel = "Acceleration";
  export let selection = [];
  export let localSelection = [];

  // Dimensions
  const width = 400;
  const height = 300;
  const margin = { top: 10, right: 10, bottom: 35, left: 45 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Scales
  const xScale = scaleLinear().domain(extent(data, x)).range([0, innerWidth]);
  const yScale = scaleLinear().domain(extent(data, y)).range([innerHeight, 0]);

  // Axes
  const xAxis = (node) => axisBottom(xScale)(select(node));
  const yAxis = (node) => axisLeft(yScale)(select(node));

  // Pre-compute coordinates
  // we need these to determine whether a point is in the selection
  const coords = data.map((d) => {
    return {
      x: xScale(x(d)),
      y: yScale(y(d)),
    };
  });

  // Brushing
  // The range of the selection rectangle.
  // If there is no active selection, it contains: null,
  // otherwise, it contains: [ [x0, y0], [x1, y1] ]
  let range = null;

  // Update the local selection
  // Determine for each point if it is in the selection rectangle
  // set all points as selected if there is no active selection!
  $: if (!range) {
    localSelection = coords.map((_) => true);
  } else {
    const [[x0, y0], [x1, y1]] = range;
    localSelection = coords.map(
      ({ x, y }) => x0 < x && x < x1 && y0 < y && y < y1
    );
  }

  // Configure d3-brush
  // Write the active selection to the `range` variable
  const brushing = (node) => {
    // Configure the brusher
    const brusher = brush()
      .on("start", ({ selection }) => (range = selection))
      .on("brush", ({ selection }) => (range = selection))
      .on("end", ({ selection }) => (range = selection));
    // Activate the brusher
    brusher(select(node));
  };
</script>

<svg viewBox="0 0 {width} {height}" class="mx-2" style="max-width: {width}px">
  <g transform="translate({margin.left},{margin.top})">
    <g use:brushing>
      <!-- Remove i, selection[i] ?..., use xScale(x(d)) instead of coords...  -->
      {#each coords as { x, y }, i}
        <circle
          cx={x}
          cy={y}
          r={3}
          fill={selection[i] ? "steelblue" : "darkgray"}
          fill-opacity={selection[i] ? 0.5 : 0.3}
          stroke={selection[i] ? "steelblue" : "darkgray"}
          stroke-width="1.5"
          stroke-opacity={selection[i] ? 1 : 0.5}
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
        class="axisLabel yLabel"
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

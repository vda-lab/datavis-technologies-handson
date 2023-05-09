<script>
  import { extent } from "d3-array";
  import { schemeDark2 } from "d3-scale-chromatic";
  import { scaleLinear, scaleOrdinal } from "d3-scale";

  // Dimensions
  const width = 800;
  const height = 100;
  const margin = { top: 20, right: 5, bottom: 5, left: 5 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Array
  const values = [
    { x: 2, y: 1, category: "cat1" },
    { x: 4, y: 2, category: "cat3" },
    { x: 6, y: 1, category: "cat2" },
    { x: 7, y: 3, category: "cat3" },
    { x: 9, y: 1, category: "cat2" },
  ];

  const xScale = scaleLinear().domain([0, 10]).range([0, innerWidth]);
  const yScale = scaleLinear().domain([0, 3]).range([innerHeight, 0]);
  const colorScale = scaleOrdinal(schemeDark2).domain(
    extent(values, (d) => d.category)
  );
</script>

<svg viewBox="0 0 {width} {height}">
  <g transform="translate({margin.left},{margin.top})">
    {#each values as value}
      <line
        x1={xScale(value.x)}
        x2={xScale(value.x)}
        y1={yScale(value.y)}
        y2={innerHeight}
        stroke="black"
      />
      <circle
        cx={xScale(value.x)}
        cy={yScale(value.y)}
        r={5}
        fill={colorScale(value.category)}
      />
      <text x={xScale(value.x)} y={yScale(value.y) - 10}>
        {value.y}
      </text>
    {/each}
    <line
      x1="0"
      x2={innerWidth}
      y1={innerHeight}
      y2={innerHeight}
      stroke="black"
    />
  </g>
</svg>

<style>
  text {
    text-anchor: middle;
    font-size: small;
  }
</style>

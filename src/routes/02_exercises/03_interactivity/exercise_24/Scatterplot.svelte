<script>
  // Dependencies
  import { format } from "d3-format";
  import { select } from "d3-selection";
  import { axisBottom, axisLeft } from "d3-axis";
  import { schemeTableau10 } from "d3-scale-chromatic";
  import { scaleLog, scaleLinear, scaleOrdinal } from "d3-scale";

  // Properties
  export let data = [];
  const continents = ["europe", "asia", "americas", "africa"];

  // Dimensions
  const [height, width] = [400, 550];
  const margin = { top: 50, right: 5, bottom: 55, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Scales
  const xScale = scaleLog().domain([300, 150000]).range([0, innerWidth]);
  const yScale = scaleLinear().domain([0, 90]).range([innerHeight, 0]);
  const rScale = scaleLinear().range([5, 40]).domain([2000, 1400000000]);
  const cScale = scaleOrdinal(schemeTableau10).domain(continents);

  // Axes
  const xAxis = (node) =>
    axisBottom(xScale).tickValues([400, 4000, 40000]).tickFormat(format("$"))(
      select(node)
    );
  const yAxis = (node) => axisLeft(yScale)(select(node));
</script>

<svg viewBox="0 0 {width} {height}" style="max-width: {width}px">
  <g transform="translate({margin.left}, {margin.top})">
    <!-- Scatterplot -->
    {#each data.filter((d) => d.income && d.life_exp) as element}
      <circle
        class="dot"
        cx={xScale(+element.income)}
        cy={yScale(+element.life_exp)}
        r={rScale(+element.population)}
        fill={cScale(element.continent)}
      >
        <title>{element.country}</title>
      </circle>
    {/each}
    <!-- Axes -->
    <g use:xAxis transform="translate(0, {innerHeight})">
      <text class="axis-label" x={innerWidth / 2} y={margin.bottom - 18}>
        GDP per Capita
      </text>
    </g>
    <g use:yAxis>
      <text
        class="axis-label"
        x={-innerHeight / 2}
        y={-margin.left + 18}
        transform="rotate(-90)"
      >
        Life Expectancy
      </text>
    </g>
    <!-- Labels -->
    <text class="title" x={innerWidth / 2} y={0}>Gapminder Scatterplot</text>
  </g>
</svg>

<style>
  .dot {
    opacity: 0.8;
  }
  .axis-label {
    font-size: 1.75em;
    text-anchor: middle;
    vertical-align: bottom;
    fill: currentcolor;
  }
  .title {
    font-size: 2.25em;
    text-anchor: middle;
  }
</style>

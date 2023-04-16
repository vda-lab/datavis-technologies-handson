<script>
  export let data;

  import { scaleLinear } from "d3-scale";
  //import { scaleOrdinal } from 'd3-scale';
  //import { axisBottom } from 'd3-axis';
  //import { axisLeft } from 'd3-axis';
  //import { select } from 'd3-selection';

  // Dimensions
  const [height, width] = [400, 600];
  const margin = { top: 50, right: 5, bottom: 55, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  console.log(data);

  const incomes = data
    .map((entry) => entry.countries)
    .reduce((acc, curr) => acc.concat(curr), [])
    .map((country) => country.income)
    .filter((value) => value);

  const life_exp = data
    .map((entry) => entry.countries)
    .reduce((acc, curr) => acc.concat(curr), [])
    .map((country) => country.life_exp);
  // .filter((value) => value);

  console.log(incomes, life_exp);

  const scale_x = scaleLinear().domain([1, 2500]).range([60, innerWidth]);

  const scale_y = scaleLinear()
    .domain([20, 100])
    .range([innerHeight - 20, 80]);

  let drawData = [];
  data
    .map((entry) => entry.countries)
    .reduce((acc, curr) => acc.concat(curr), [])
    .forEach((country) => {
      let new_entry = {};
      new_entry.income = scale_x(country.income);
      new_entry.life_exp = scale_y(country.life_exp);
      /*  console.log(
        country.income,
        new_entry.income,
        country.life_exp,
        new_entry.life_exp
      );*/
      drawData.push(new_entry);
    });

  console.log(drawData);
</script>

<svg viewBox="0 0 {width} {height}" style="max-width: {width}px">
  <g transform="translate({margin.left}, {margin.top})">
    {#each drawData as country}
      <circle cx={country.income} cy={country.life_exp} r="5" fill="green" />
      <text x={country.income} y={country.life_exp} />
    {/each}
  </g>
</svg>

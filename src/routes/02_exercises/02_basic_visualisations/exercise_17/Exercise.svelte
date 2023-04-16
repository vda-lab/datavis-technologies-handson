<script>
import { scaleLog } from 'd3-scale';
const scale = scaleLog().domain([2, 9]).range([10,780]);

    // Dimensions
    const width = 800;
    const height = 100;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  
    // Array
    const values = [2, 4, 6, 7, 9];
    const mappedValues = values.map(v => scale(v));
    //const array = [];
    //values.forEach(abc => array.push(abc *2));
  </script>
  
  <svg viewBox="0 0 {width} {height}">
    <g transform="translate({margin.left},{margin.top})">
      {#each mappedValues as dp}
        <circle cx={dp} cy="50" r=10 />
      {/each}
    </g>
  </svg>
  
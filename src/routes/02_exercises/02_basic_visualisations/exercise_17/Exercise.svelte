<script>
import { scaleLog } from 'd3-scale';
const scale = scaleLog().domain([2, 9]).range([0,1]);

    // Dimensions
    const width = 800;
    const height = 100;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  
    // Array
    const values = [2, 4, 6, 7, 9];
    let log_vals = [0, 0, 0, 0, 0];
    for ( let i = 0; i < 5; i++ ) {
      log_vals[i] = scale(values[i]);
};
    
  </script>
  
  <svg viewBox="0 0 {width} {height}">
    <g transform="translate({margin.left},{margin.top})">
        {#each log_vals as dp}
    <circle cx={dp} cy="0" r=10 />
  {/each}
    </g>
  </svg>
  
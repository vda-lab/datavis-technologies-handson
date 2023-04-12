<script>
import { scaleLinear } from 'd3-scale';
const scale = scaleLog().domain([1, 10])
            .range([10, 20, 30, 40, 50, 60]);

    // Dimensions
    const width = 800;
    const height = 100;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  
    // Array
    const values = [2, 4, 6, 7, 9];
    let log_vals = [0, 0, 0, 0, 0];
    for ( var i = 0; i < 5; i++ ) {
      log_vals[i] = values[i];
};
    
  </script>
  
  <svg viewBox="0 0 {width} {height}">
    <g transform="translate({margin.left},{margin.top})">
        {#each log_values as dp}
    <circle cx={dp} cy="0" r=10 />
  {/each}
    </g>
  </svg>
  
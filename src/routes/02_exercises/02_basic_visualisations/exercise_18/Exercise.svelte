<script>
import { scaleLog } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

const scale = scaleLog().domain([2, 9]).range([10,780]);
const xAxis = axisBottom(scale);



function executeXAxis(handle){
    xAxis(select(handle));
  }

    // Dimensions
    const width = 800;
    const height = 100;
    const margin = { top: 5, right: 5, bottom: 25, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  
    // Array
    const values = [2, 4, 6, 7, 9];
    const mappedValues = values.map(v => scale(v));

    
  </script>
  
  <svg viewBox="0 0 {width} {height}">
    <g transform="translate({margin.left},{margin.top})">
      {#each mappedValues as dp}
        <circle cx={dp} cy="50" r=10 />
      {/each}
    </g>
    <g use:executeXAxis  transform="translate({margin.left},{height-margin.bottom})">
    
    </g>
    <text x="395" y="100" class="x-label">x-axis</text>
  </svg>

  <style>
    .x-label{
      fill: blue;
      font-size: 10px;
    }
  </style>





  
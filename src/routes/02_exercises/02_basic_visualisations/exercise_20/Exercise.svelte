<script>
import { scaleLinear } from 'd3-scale';
import { scaleOrdinal } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

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
  
    //scales
    const scale_x = scaleOrdinal().domain(data.map(entry => entry.service)).range([margin.left+50,margin.left+125,margin.left+200,margin.left+275,margin.left+350,margin.left+425]);
    const scale_y = scaleLinear().domain([0.4, 2.9]).range([10,innerHeight]);
    const scale_y_inv = scaleLinear().domain([0.4, 2.9]).range([innerHeight,10]);

    const xAxis = axisBottom(scale_x);
    const yAxis = axisLeft(scale_y_inv);

    function executeXAxis(handle){
    xAxis(select(handle));
  }

  function executeYAxis(handle){
    yAxis(select(handle));
  }


    let drawData = [];
    data.forEach(entry => {
        let new_entry;
        new_entry = {service: scale_x(entry.service), viewers: scale_y(entry.viewers)};
        drawData.push(new_entry);
    });
    

  </script>
  
  <!-- setting a viewBox and max-width allows the SVG to shrink but not grow! -->
  <svg viewbox="0 0 {width} {height}" style="max-width: {width}px">
    <g transform={`translate(${margin.left},${margin.top})`}>
      {#each drawData as bar}
      <rect x={bar.service} y={270-bar.viewers} width="70" height={bar.viewers} />
      {/each}
      <g use:executeYAxis  transform={`translate(${margin.left},${margin.top-10})`}>
    </g>
    </g>
    <g transform="translate(70, 190)">
     <text
       text-anchor="start"
       transform="rotate(270)"
     >
      nr of viewers
    </text>
  </g>
  <g use:executeXAxis  transform={`translate(${margin.left+40},${height-20})`}>
    
  </svg>
  
<style>
    rect {
      fill : pink;
    }
  </style>
  
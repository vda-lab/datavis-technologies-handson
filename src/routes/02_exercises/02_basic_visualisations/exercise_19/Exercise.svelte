<script>
import { scaleLinear } from 'd3-scale';
import { scaleOrdinal } from 'd3-scale';
import * as d3_chrom from 'd3-scale-chromatic';


    // Dimensions
    const width = 800;
    const height = 100;
    const margin = { top: 20, right: 5, bottom: 5, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const scale_x = scaleLinear().domain([2, 9]).range([10,innerWidth]);
    const scale_y = scaleLinear().domain([1, 3]).range([10,innerHeight]);
    const scale_cat = scaleOrdinal(d3_chrom.schemeDark2).domain(["cat1", "cat2", "cat3"]);
    

    // Array
    const values = [
      { x: 2, y: 1, category: "cat1" },
      { x: 4, y: 2, category: "cat3" },
      { x: 6, y: 1, category: "cat2" },
      { x: 7, y: 3, category: "cat3" },
      { x: 9, y: 1, category: "cat2" }
    ];

    //I dont know what I am supposed to use this for...
    //Maybe I got the exercise wrong but it seems to work w/o the uniques...
    //const uniques = [...new Set(values.map(v => v.category))]; 
    //const values.forEach{(cat => scale_cat(cat)};
    //console.log(uniques);

    const array = [];
    values.forEach(abc => {
      let point;
      point = {x: scale_x(abc.x), y: scale_y(abc.y), category: scale_cat(abc.category)};
      array.push(point);
      });

    
  


  </script>
  
  <svg viewBox="0 0 {width} {height}">
    <g transform="translate({margin.left},{margin.top})">
      {#each array as point}
      <circle cx={point.x} cy={point.y} r=5 fill={point.category}/>
       <text x={point.x} y={point.y-10} class="valueLabel">{point.y}</text>
      {/each}
    </g>
  </svg>
  
  <style>
    text {
      text-anchor: middle;
      font-size: small;
    }
  </style>
  
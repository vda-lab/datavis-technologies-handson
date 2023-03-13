<script>
    import { csv } from "d3-fetch";
    import { onMount } from "svelte";
    import Scatter from "./_ex_4_scatter.svelte";
  
    // Load the data
    let data = null;
    onMount(async () => {
      data = await csv("/data/cars-2.csv");
    });
  
    // Configurations
    const s1 = {
      x: (d) => +d.Horsepower,
      y: (d) => +d.Acceleration,
      xLabel: "Horsepower",
      yLabel: "Acceleration"
    };
    const s2 = {
      x: (d) => +d.Displacement,
      y: (d) => +d.Miles_per_Gallon,
      xLabel: "Displacement",
      yLabel: "Miles per Gallon"
    };
  </script>
  
  {#if !data}
    <p>Loading the data, please wait...</p>
  {:else}
    <Scatter {data} {...s1} />
    <Scatter {data} {...s2} />
  {/if}
  
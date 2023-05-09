<script>
  import { csv } from "d3-fetch";
  import { onMount } from "svelte";
  import Scatter from "./Scatterplot.svelte";

  // Load the data
  let data = null;
  onMount(async () => {
    data = await csv("/data/cars-2.csv");
  });

  // Selections
  let select_1 = [];
  let select_2 = [];
  $: selection = select_1.map((v, i) => v && select_2[i]);

  // Configurations
  const s1 = {
    x: (d) => +d.Horsepower,
    y: (d) => +d.Acceleration,
    xLabel: "Horsepower",
    yLabel: "Acceleration",
  };
  const s2 = {
    x: (d) => +d.Displacement,
    y: (d) => +d.Miles_per_Gallon,
    xLabel: "Displacement",
    yLabel: "Miles per Gallon",
  };
</script>

{#if !data}
  <p>Loading the data, please wait...</p>
{:else}
  <div class="d-flex justify-content-around">
    <Scatter {data} {selection} bind:localSelection={select_1} {...s1} />
    <Scatter {data} {selection} bind:localSelection={select_2} {...s2} />
  </div>
{/if}

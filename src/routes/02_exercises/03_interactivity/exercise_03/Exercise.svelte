<script>
    import { json } from "d3-fetch";
    import { onMount } from "svelte";
  
    import Controls from "./_ex_3_controls.svelte";
    import Scatterplot from "./_ex_3_scatterplot.svelte";
  
    // Load the data
    let data = null;
    onMount(async () => {
      data = await json("/data/gapminder.json");
    });
  </script>
  
  {#if !data}
    <p>Loading the data, please wait...</p>
  {:else}
    <div>
      <Scatterplot data={data[0]['countries']} />
      <Controls {data} />
    </div>
  {/if}
  
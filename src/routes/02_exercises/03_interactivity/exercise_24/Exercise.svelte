<script>
  import { json } from "d3-fetch";
  import { onMount } from "svelte";

  import Controls from "./Controls.svelte";
  import Scatterplot from "./Scatterplot.svelte";

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

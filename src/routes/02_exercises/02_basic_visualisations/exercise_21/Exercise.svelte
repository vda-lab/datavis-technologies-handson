<script>
  import { json } from "d3-fetch";
  import { onMount } from "svelte";
  import Scatterplot from "./Scatterplot.svelte";

  let data = null;
  onMount(async () => {
    data = await json("/data/gapminder.json");
  });
</script>

{#if !data}
  <p>Loading the data, please wait...</p>
{:else}
  <Scatterplot data={data[0]["countries"]} />
{/if}

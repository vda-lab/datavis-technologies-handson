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

  // State
  let year = 0;
  let selected_continent = "all";

  // Select which data to show
  function selectData(data, year, continent) {
    const year_data = data[year]["countries"];
    if (continent == "all") {
      return year_data.filter((c) => c.income && c.life_exp);
    }
    return year_data.filter(
      (c) => c.continent == continent && c.income && c.life_exp
    );
  }
</script>

{#if !data}
  <p>Loading the data, please wait...</p>
{:else}
  <div>
    <Scatterplot data={selectData(data, year, selected_continent)} />
    <Controls {data} bind:year bind:selected_continent />
  </div>
{/if}

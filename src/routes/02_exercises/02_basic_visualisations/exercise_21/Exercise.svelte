<script>
  import Scatterplot from "./Scatterplot.svelte";
  import { json, csv } from "d3-fetch";
  import { onMount } from "svelte";

  let test = test1();
  let data_1 = null;
  let new_dat = null;
  async function test1() {
    console.log("onMount started!");
    data_1 = await json("/data/gapminder.json");
    new_dat = data_1.filter((value) => value.year === "1800");
    console.log(new_dat);
    return new_dat;
  }

  console.log("Script finished!");
</script>

{#await test}
  Loading...
{:then new_dat}
  <Scatterplot data={new_dat} />
{/await}

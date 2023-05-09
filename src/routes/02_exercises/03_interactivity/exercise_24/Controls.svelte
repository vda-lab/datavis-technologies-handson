<script>
  // Properties
  export let data = [];
  export let year = 0;
  export let selected_continent = "all";
  const continents = ["europe", "asia", "americas", "africa"];

  // Internal state
  let running = false;
  let interval = null;

  function toggleAnimation() {
    running = !running;
    if (running) {
      interval = setInterval(step, 50);
    } else {
      clearInterval(interval);
    }
  }

  function resetAnimation() {
    if (running) {
      running = false;
      clearInterval(interval);
    }
    year = 0;
  }

  function step() {
    year = (year + 1) % data.length;
  }
</script>

<div class="row">
  <div class="col-4">
    <button type="button" class="btn btn-primary" on:click={toggleAnimation}>
      {running ? "Stop" : "Start"}
    </button>

    <button type="button" class="btn btn-primary" on:click={resetAnimation}>
      Reset
    </button>
  </div>

  <div class="col-5">
    <label class="form-label col-sm-10">
      Year: {+data[0]["year"] + year}
      <input
        type="range"
        class="form-range"
        min="0"
        max={data.length - 1}
        step="1"
        bind:value={year}
      />
    </label>
  </div>

  <div class="col-3">
    <select
      id="continent-select"
      class="form-select"
      bind:value={selected_continent}
    >
      <option value="all">all</option>
      {#each continents as continent}
        <option value={continent}>{continent}</option>
      {/each}
    </select>
  </div>
</div>

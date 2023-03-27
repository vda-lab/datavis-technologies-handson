<script>
  let clicked = false;
</script>

<div>
  <button class="btn btn-primary" on:click={() => (clicked = true)}>
    click here
  </button>

  <!-- Solution -->
  {#if clicked}
    <span>You have clicked the button!</span>
  {:else}
    <span>You have to click the button!</span>
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }
</style>

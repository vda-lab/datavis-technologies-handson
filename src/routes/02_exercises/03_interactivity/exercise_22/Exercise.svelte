<script>
  let count = 0;
</script>

<button type="button" class="btn btn-primary" on:click={() => count++}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>
<button type="button" class="btn btn-danger" on:click={() => (count = 0)}>
  Reset
</button>

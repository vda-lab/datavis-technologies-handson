<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 2</h3>
<p>
  Open the <CC code={`./Exercise.svelte`} /> file for this exercise and add headers
  of all sizes. Your output should look like this:
</p>

<div style="border:solid 1px black;">
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
</div>
<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

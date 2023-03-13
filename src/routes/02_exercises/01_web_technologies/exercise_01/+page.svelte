<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";

  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 1</h3>
<p>
  Open the <CC code={`./Exercise.svelte`} /> file for this exercise and
</p>
<ul>
  <li>replace the ellipsis (<CC code={`...`} />) with your name</li>
  <li>make your name bold</li>
  <li>make it red instead of green</li>
  <li>remove the <CC
    language="html"
    code="<style></style>"
  /> block and make the CSS inline</li>
</ul>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

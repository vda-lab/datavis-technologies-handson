<script>
  import Code from "$lib/ui/CodeBlock.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 14</h3>
<p>
  In custom data visualizations it is common that you want to change a data
  point's visual encoding when it becomes selected. An easy way to do this is to
  define a CSS class that overrides the attributes you want to change and assign
  that class when a data point becomes selected. Svelte supports assigning
  classes based on a condition in the component's script:
</p>

<Code language="svelte" code={`<p class:myClassName={condition} />`} />

<hr />
<p>
  Define a class that changes the background of the button when it is assigned
  and assign it to only the last-clicked button. No button should have the class
  when no button has been clicked yet.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

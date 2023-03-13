<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 12</h3>

<p>
  Sometimes you want to change the markup of your component depending on a
  condition in the script. For instance, when you only want to show a tooltip
  when a user hovers over a component. Svelte makes it easy to do this with
  their if-else blocks:
</p>

<Code
  language="javascript"
  code={`{#if condition}
  ...
{:else}
  ...
{/if}`}
/>

<p>
  Here, the condition is a JavaScript statement that evaluates to <CC
    code={`true`}
    language="javascript"
  />
  or <CC code={`false`} language="javascript" /> and the markup you want to show
  in either case is put on the <CC code={`...`} />.
</p>

<hr />

<p>
  Add an <code>if-else</code> block to this folder's
  <CC code={`./Exercise.svelte`} />
  that says <i>You have clicked the button!</i> when you have clicked the button
  and <i>You have to click the button!</i> when you have not clicked the button.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

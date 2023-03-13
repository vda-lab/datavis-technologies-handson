<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 22</h3>

<p>
  HTML provides several types of <a
    class="link-primary"
    target="_blank"
    rel="noreferrer"
    href="https://www.w3schools.com/tags/tag_input.asp">input</a
  >
  tags as wel as a dedicated
  <a
    class="link-primary"
    target="_blank"
    rel="noreferrer"
    href="https://www.w3schools.com/tags/tag_button.asp">button</a
  >
  tag that you can use to let people interact with your visualisations. Svelte also
  makes it easy to program what each input has to do with the
  <a
    class="link-primary"
    target="_blank"
    rel="noreferrer"
    href="https://svelte.dev/docs#template-syntax-element-directives-on-eventname"
    >on-directive</a
  >:
</p>
<Code
  language="svelte"
  code={`<script>
  function myCallback(event) {
    console.log("Clicked!");
  }
</script>

<button on:click={myCallback}></button>`}
/>

<hr />

<p>
  Create two buttons, one that keeps track on the number of times you've clicked
  on it and one to reset the counter. On this website, we use <a
    href="https://getbootstrap.com/docs/4.0/components/buttons/"
    class="link-primary"
    target="_blank"
    rel="noreferrer">bootstrap</a
  >
  to style our buttons, you can do the same here.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 4</h3>
<p>
  You can also use <a
    target="_blank"
    rel="noreferrer"
    href="https://www.w3schools.com/tags/default.asp">tags</a
  >
  that format text. These tags are inline: they do not change where text is shown,
  only how it is shown.
</p>

<hr />

<p>
  Within <CC code={`./Exercise.svelte`} />, use tags to
  <em>emphasize</em> the word <CC code={`marks`} />, <s>strike through</s> the
  word
  <CC code={`basic`} />, and make <CC code={`geometric elements`} /> appear
  <strong>bold</strong>.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

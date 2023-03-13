<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 3</h3>
<p>
  There are also several tags that layout text. For example, tags that make
  paragraphs and lists.
</p>
<hr />
<p>
  In this folder's <CC code={`./Exercise.svelte`} />, add a paragraph saying
  <i> "The best visual channels ordered by Mackinlay's ranking:" </i>
  and an ordered list containing the items: <var>position</var>,
  <var>length</var>, and <var>angle</var>.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

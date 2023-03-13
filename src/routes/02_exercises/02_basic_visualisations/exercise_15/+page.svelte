<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";

  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 15</h3>

<p>
  The two most useful SVG elements for data visualization are the circle (<CC
    language="svelte"
    code="<circle cx=0 cy=0 r=10 />"
  />) and rectangle (<CC
    language="svelte"
    code="<rect x=0 y=0 width=10 height=10 />"
  />). You can style both using CSS or by specifying attributes on the element.
  Common styling attributes include the fill, stroke, and opacity.
</p>

<hr />

<p>
  Place a yellow rectangle with a width and height of 40 pixels so that it is
  centered in the content-area. Then, add a skyblue circle with a radius of 20
  pixels on the bottom-right corner of the rectangle.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

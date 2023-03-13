<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";

  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 19</h3>
<p>
  For this exercise, the <CC code="values" /> array is changed into an array of objects.
  Each object within the array contains an x- and y-coordinate, and a category for
  coloring. Use the
  <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://github.com/d3/d3-scale">d3-scale</a
  >
  module again to plot both x- and y-values as circles to the DOM.
</p>
<ul>
  <li>
    Open the file and complete the exercise by defining linear scales for both
    the x- and y-coordinates of the circles. Use the <CC code="innerWidth" /> and
    <CC code="innerHeight" /> variables as the outer coordinates of the scales' range.
    <em> Hint: Coordinates in SVG start in the upper-left corner!</em>
  </li>
  <li>
    Use a categorical scale such as <CC
      language="javascript"
      code="scaleOrdinal()"
    /> to map the categories to the color values. You can use a predefined colorscale
    of the
    <a
      target="_blank"
      rel="noreferrer"
      class="link-primary"
      href="https://github.com/d3/d3-scale-chromatic">d3-scale-chromatic</a
    >
    module for this (e.g. <CC code="schemeDark2" />). To map all different
    values of the 'category' key to the domain of your ordinal scale, you can
    use <CC
      language="javascript"
      code={"const uniques = [...new Set(values.map(v => v.category))]"}
    />.
  </li>
  <li>
    Plot the y-values about 10px above the circle elements and assign them the
    class <CC code="valueLabel" />.
  </li>
</ul>

<p>
  As a bonus: transform into a lollipop chart by adding svg line attributes from
  the bottom towards the circle elements.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

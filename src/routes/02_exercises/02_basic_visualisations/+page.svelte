<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";
  import ExampleSVG from "$lib/ui/ExampleSVG.svelte";
</script>

<h1>Basic visualisations</h1>
<p>
  In this group of exercises, we will cover how to build custom visualizations
  using Svelte. We will show some key <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="http://d3js.org">d3.js</a
  >
  functionalities and explain how to go from JavaScript objects to elements on the
  DOM. You will use SVG as plotting back-end and experiment with
  <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://github.com/d3/d3-scale">scales</a
  >,
  <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://github.com/d3/d3-scale-chromatic">colors</a
  >, and
  <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://github.com/d3/d3-axis">axes</a
  >
  to build a static version of the famous Gapminder visualization by Hans Rosling.
</p>

<h2>SVG</h2>
<p>
  Scalable Vector Graphics (SVG) is an XML based specification for constructing
  graphics. It describes images as a combination of graphical primitives, like
  circles, rectangles, and lines. SVG is very useful for custom visualizations,
  as we can just tell the browser what to show where, rather than having to deal
  with low-level graphics APIs. The only downside of SVG for our use is that it
  can get slow when you are dealing with many data points. In that case you
  should consider using a <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://www.w3schools.com/html/html5_canvas.asp">Canvas</a
  > instead.
</p>

<p>
  Below is a basic example of an SVG element for a static visualisation. It is
  important to understand the coordinate system of an SVG element, as that is
  central to plotting the data where you want it. By default, the origin of an
  SVG element is at the top-left: the x-axis points to the right and the y-axis
  points to the bottom. We often want to reserve some space for axes and
  legends. In the example, we defined the <CC code="margin" /> variable which specifies
  how much space should be reserved on each side. The margins are coloured dark-blue
  while the content-area is light-blue. As you can see, the content-area's origin
  has moved away from the SVG element's origin. In addition, its width and height
  have shrunk. The <CC code="innerWidth" /> and
  <CC code="innerHeight" />
  variables compute the new size of the content-area and we used a grouping
  <CC language="html" code={`<g></g>`} />-tag that specifies the translation of
  the content-area's origin. This means that, when you are mapping data to the
  content-area, the x- and y-coordinates range from 0 to <CC
    code="innerWidth"
  />
  and <CC code="innerHeight" />, respectively.
</p>

<Code
  language="svelte"
  code={`<script> 
  const width = 436;
  const height = 300;
  const margin = { top: 10, right: 10, bottom: 50, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
</script>

<svg {width} {height}>
  <g transform='translate({margin.left}, {margin.top})'>
      ...
  </g>
</svg>`}
/>

<div style="text-align:center;">
  <ExampleSVG />
</div>

<h2>Exercises</h2>

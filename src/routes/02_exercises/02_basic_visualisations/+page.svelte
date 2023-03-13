<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';
	import ExampleSVG from '$lib/ui/ExampleSVG.svelte';
</script>

In this group of exercises, we will cover how to build custom visualizations using Svelte. We will show some key <a href="http://d3js.org">d3.js</a> functionalities and explain how to go from JavaScript objects to elements on the DOM. You will use SVG as plotting back-end and experiment with <a href="https://github.com/d3/d3-scale">scales</a>, <a href="https://github.com/d3/d3-scale-chromatic">colors</a>, and <a href="https://github.com/d3/d3-axis">axes</a> to build a static version of the famous Gapminder visualization by Hans Rosling.

<p>Scalable Vector Graphics (SVG) is an XML based specification for constructing graphics. It describes images as a combination of graphical primitives, like circles, rectangles, and lines. SVG is very usefull for custom visualizations, as we can just tell the browser what to show where, rather than having to deal with low-level graphics APIs. The only downside of SVG for our use is that it can get slow when you are dealing with many data points. In that case you should consider using a <a href="https://www.w3schools.com/html/html5_canvas.asp">Canvas</a> instead.</p>

<p>Below is a basic example of an SVG element for a static visualisation. It is important to understand the coordinate system of an SVG element, as that is central to plotting the data where you want it. By default, the origin of an SVG element is at the top-left: the x-axis points to the right and the y-axis points to the bottom. We often want to reserve some space for axes and legends. In the example, we defined the <code>margin</code> variable which specifies how much space should be reserved on each side. The margins are coloured dark-blue while the content-area is light-blue. As you can see, the content-area's origin has moved away from the SVG element's origin. In addition, its width and height have shrunk. The <code>innerWidth</code> and <code>innerHeight</code> variables compute the new size of the content-area and we used a grouping (<code>g</code>) tag that specifies the translation of the content-area's origin. This means that, when you are mapping data to the content-area, the x- and y-coordinates range from 0 to <code>innerWidth</code> and <code>innerHeight</code>, respectively.</p>

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

<img src="" />

<p>Two very useful SVG elements for data visualization are the circle (<CC code="<circle cx=0 cy=0 r=10 />"/>) and rectangle (<CC code="<rect x=0 y=0 width=10 height=10"/>). You can style both using CSS or by specifying attributes on the element. Common styling attributes include the fill, stroke, and opacity.</p>
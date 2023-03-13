<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';

	import Exercise from './Exercise.svelte';
</script>

<h3>Exercise 4</h3>
<p>
We have prepared a visualization that shows two scatter plots using the <CC code="/data/cars-2.csv"/> dataset. Note that we construct two <CC code="_ex_4_scatter.svelte" /> components using a <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread operator</a> in the then-block of <CC code="ex_4.svelte" />:</p>

<Code
	language="svelte"
	code={`<\script>
import Scatter from './_ex_4_scatter.svelte';
...
const s1 = {
	x: (d) => +d.Horsepower,
	y: (d) => +d.Acceleration,
	xLabel: 'Horsepower',
	yLabel: 'Acceleration'
};
</\script>
...
	<Scatter {data} {...s1} />
...`}
/>

<p>Here, <CC code="s1" />'s properties (<CC code="x" />, <CC code="x" />, <CC code="xLabel"/>, and <CC code="xLabel" />) are passed to the <CC code="Scatter" /> component as individual component properties. The <CC code="Scatter" /> component uses them to extract the values it has to use for the x- and y-coordinates, and puts the labels on their respective axes. This way, we can re-use the <CC code="Scatter"/> component for two different scatter plots.</p>

<p>In this exercise, you will add brushing and linking to these two scatter plots, such that you can draw a rectangle in one plot, and the points that lie within that rectangle get highlighted in both plots. In the case that you draw a rectangle in both plots, only the points that lie within both rectangles should get highlighted.</p>

<p>D3 provides the functionality that you need to draw these rectangles in the <a target="_blank" href="https://github.com/d3/d3-brush">d3-brush</a> module. Like, with the axes, calling d3.js' <CC code="brush()" /> function gives you a function that takes a <em>selected</em> handle to an svg group element and adds the brushing functionality to that element. You can use Svelte's <a target="_blank" href="https://svelte.dev/docs#template-syntax-element-directives-use-action">actions</a> to apply the brush to an element, just as we did for the axes. However, without configuration, the brush will not do anything. You have tell the brush what it has to do when a brush starts, moves, and ends. To do that, you have to call the <CC code=".on()" /> function on the brush:</p>

<Code
	language="javascript"
	code={`brush()
.on('start', doStart)
.on('brush', doMove)
.on('end', doEnd)`}
/>

<p>So, to implement brushing and linking, peform these steps:</p>
<ol>
<li>Define two component properties in <CC code="_ex_4_scatter.svelte" />. One that stores an array of boolean values indicating which points are selected in both scatter plots and one that stores a similar array for the points selected in just the local component.</li>
<li>In <CC code="ex_4.svelte" /> use a <CC code="bind" /> to observe the local selections of both plots. Then reactively define the global selection so that only points that are selected in both plots are set to <CC language="javascript" code="true"/>. Pass the global selection as a normal component property to the <CC code="_ex_4_scatter.svelte"/> components.</li>
<li>We already defined the <CC code="range" /> variable for you that will store the range of the selection rectangle if there is an active selection or <CC language="javascript" code="null"/> otherwise. Configure a d3-brush so that the <CC code="selection" /> property of the argument it passes to your callbacks is written to our <CC code="range"/> variable when the brush starts, moves, and ends. The values the brush gives are in the coordinate system of the element it is applied to. So, apply the brush to the SVG group element that contains our datapoints. This ensures that we do not have to deal with the margins of our svg element when we compute whether a point lies within the selection rectangle.</li>
<li>Since we need to know the x- and y-coordinates of our datapoints to determine whether they are within a selection and to plot them on the screen, it is a good idea to pre-compute these coordinates in the script of <CC code="_ex_4_scatter.svelte"/>. Define a <CC code="coords" /> variable that stores an <CC language="javascript" code={`\{x, y\}`}/> object for each data point. Use it to plot the circles instead of re-computing the x- and y-coordinates in the markup section.</li>
<li>Use the <CC code="range" /> and <CC code="coords" /> variable to reactively update the values of the local selection such that all data points are set to <CC language="javascript" code="true" /> if there is no active selection and only the points that lie within the rectangle are set to <CC language="javascript" code="true"/> when there is an active selection.</li>
<li>Use the global selection to set both the stroke and fill to <CC code="darkgray"/>, the fill opacity to <CC code="0.3" />, and the stroke opacity to <CC code="0.5"/> when a point is not selected.</li>
</ol>

<p>Now you should have a working brushing and linking implementation!</p>
  

<h5>Output</h5>

<div class="output">
	<Exercise />
</div>
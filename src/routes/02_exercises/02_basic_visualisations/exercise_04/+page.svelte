<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';

	import Exercise from './Exercise.svelte';
</script>

<h3>Exercise 4</h3>
<p>Now lets add an axis to the previous exercise so that we can read the x-coordinates of the circles. You will need to import <code>axisBottom</code> from the <a target="_blank" href="https://github.com/d3/d3-axis">d3-axis</a> module and <code>select</code> from the <a target="_blank" href="https://github.com/d3/d3-selection">d3-selection</a> module. Similar to the scales, the functions that you import construct the axis-function. However, in this case, you need to specify which scale to use when you construct the axis. Once you have constructed an axis, it is a function that takes a handle to the DOM element and fills that DOM element with the parts that build up the axis. Typically we add a specific <code>g</code> tag to use as DOM element for an axis, remember to apply a translation so that the content of the element is in the bottom margin of the SVG.</p>

<p>Calling functions with a handle to a DOM element is different from calling normal functions, as those handles only exist when the DOM is constructed. In Svelte, you can use the <CC code="<g use:myFunction></g>"/> syntax to specify an action, i.e., a function that has to be called with the handle to an element as argument as soon as it becomes available. One final point, D3 uses selections as handles to elements instead of raw HTML handles. So the axis-function has to be called with <CC code="xAxis(select(handle))"/> rather than <CC code="xAxis(handle)"/>!</p>

<p>Copy your answer from Exercise 3 to this exercise. Then, add an x-axis to the visualization. Also add a text label indicating that it is the x-axis, use the currentcolor for the label and center the label on the x-axis.</p>

<h5>Output</h5>

<div class="output">
	<Exercise />
</div>
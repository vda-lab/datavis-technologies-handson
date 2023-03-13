<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';

	import Exercise from './Exercise.svelte';
</script>

<h3>Exercise 5</h3>
<p>For this exercise, the <CC code="values" /> array is changed into an array of objects. Each object within the array contains an x- and y-coordinate, and a category for coloring. Use the <a target="_blank" href="https://github.com/d3/d3-scale">d3-scale</a> module again to plot both x- and y-values as circles to the DOM. Open the file and complete the exercise by defining linear scales for both the x- and y-coordinates of the circles. Use the <CC code="innerWidth" /> and <CC code="innerHeight" /> variables as the outer coordinates of the scales' range. Now, use a categorical scale such as <CC language="javascript" code="scaleOrdinal()" /> to map de categories to the color values. You can use a predefined colorscale of the <a target="_blank" href="https://github.com/d3/d3-scale-chromatic">d3-scale-chromatic</a> module for this (e.g. <CC code="schemeDark2" />). To map all different values of the 'category' key to the domain of your ordinal scale, you can use the <CC language="javascript" code="extent()"/> function from the <a target="_blank" href="https://github.com/d3/d3-array">d3-array</a> module. This function operates on arrays, you can also specify an accessor function so the function knows which variable of the object it should look at. Next, plot
the y-values about 10px above the circle elements and assign them the class <CC code="valueLabel"/>.</p>

<p>As a bonus: transform into a lollipop chart by adding svg line attributes from the bottom towards the circle elements.</p>
<p><em> Hint: Coordinates in SVG start in the upper-left corner!</em></p>

<h5>Output</h5>

<div class="output">
	<Exercise />
</div>
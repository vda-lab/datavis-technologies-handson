<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';

	import Exercise from './Exercise.svelte';
</script>

<h3>Exercise 3</h3>
<p>Scales map values from one dimension onto values in another dimension. Typically, we need scales to map some attribute of the data onto the x- and y-coordinates of our visualization. The possible range of values we want to map onto the coordinates is called the domain. The possible range of values we want to map those values to is called the range. So, the data provides the domain, and the coordinates of the SVG provide the range. You can also use scales to map values onto color rather than space, but that is for another exercise.</p>

<p><a href="http://d3js.org">D3</a> provides several very useful scale functions in the <a href="https://github.com/d3/d3-scale">d3-scale</a> module. They all follow the same pattern. The function you import is used to construct a scale:</p>

<Code
	language="javascript"
	code={`
import { scaleLinear } from 'd3-scale';
const scale = scaleLinear();`}
/>

<p>Once you have constructed the scale, it acts as a function that takes a value of the domain and returns a value in the range. It also has helper functions you can use to specify the minimum and maximum value of the domain and range. If you do not specify any values, both the domain and the range lie between 0 and 1, which is not useful for us!</p>

<p>Plot the values in the values array as circles with a radius of 10 pixels centered on the y-axis, where the value is mapped to the x-coordinate using a <b>logarithmic</b> scale. Hint: if it does not look like you expect, what is the logarithm of zero?</p>

<h5>Output</h5>

<div class="output">
	<Exercise />
</div>
<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';

	import Exercise from './Exercise.svelte';
</script>

<h3>Exercise 6</h3>
<p>Create a barchart visualising the given fictive dataset with the number of viewers on popular streaming services.</p>
<ol>
<li> Import the necessary scales from the <a target="_blank" href="https://github.com/d3/d3-scale">d3-scale</a> module.</li>
<li>Configure the x- and y-scales.</li>
<li>Use svelte logic to loop through the data and create a rectangle for each entry.</li>
<li>Add an axis to the left of the chart based on the scale you defined for the number of viewers.</li>
<li>Lable the left axis</li>
<li>Add an axis to the bottom of the chart based on the scale you defined for the streaming services.</li>
</ol>

<h5>Output</h5>

<div class="output">
	<Exercise />
</div>
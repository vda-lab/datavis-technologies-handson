<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';

	import Exercise from './Exercise.svelte';
</script>

<h3>Exercise 1</h3>
<p>HTML provides several types of <a target="_blank" href="https://www.w3schools.com/tags/tag_input.asp">input</a> tags as wel as a dedicated <a target="_blank" href="https://www.w3schools.com/tags/tag_button.asp">button</a> tag that you can use to let people interact with your visualisations. Svelte also makes it easy to program what each input has to do with the <a target="_blank" href="https://svelte.dev/docs#template-syntax-element-directives-on-eventname">on-directive</a>.</p>

<p>Create two buttons, one that keeps track on the number of times you've clicked on it and one to reset the counter. Last week, we used <a target="_blank" href="https://getbootstrap.com/docs/4.0/components/buttons/">bootstrap</a> to style our buttons, you can do the same here.</p>

<h5>Output</h5>

<div class="output">
	<Exercise />
</div>
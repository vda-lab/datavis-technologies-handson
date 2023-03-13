<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';

	import Exercise from './Exercise.svelte';
</script>

<h3>Exercise 2</h3>
<p>Sometimes, your visualization should scale to the space available to it on a web-page, but you may not know how much that is ahead of time. One way to resolve this issue is to use Svelte's reactivity (which we will cover next week) to observe the size of the SVG element on the page and update your values accordingly. Another approach is using SVG's viewBox attribute. The viewBox allows you to specify the SVG's coordinate system irrespective of the actual SVG element's size. It takes 4 arguments, namely the minimum x value, the minimum y value, the width, and the height of the coordinate space you want to use: <CC code="<svg viewBox='0 0 100 100'></svg>"/>.</p>

<p>Change the SVG element to use a viewBox instead of specifying the width and height and update the width and height values so that the size of circle is similar to the one in Exercise 1.</p>

<h5>Output</h5>

<div class="output">
	<Exercise />
</div>
<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';

	import Exercise from './Exercise.svelte';
</script>

<h3>Exercise 7</h3>
<p>We can combine all what we've learned so far and build a static version of the gapminder visualization by Hans Rosling. Use the data stored in <CC code="static/data/gapminder.json"/>. The data includes an array of objects storing two keys in each object;'countries' and 'year'. For this exercise, you will need to extract the first object from the array (year 1800) and use the array stored in the 'countries' key as data to base your scatterplot visualization on.</p>

<p>D3 provides several functions in the <a target="_blank" href="https://github.com/d3/d3-fetch">d3-fetch</a> module that load data. All of them folow the same structure. For example, to load a hypothetical file <CC code="myFile.csv" /> located in the <CC code="static"/> folder, you would use:</p>

<Code
language="javascript"
code={`csv('/myFile.csv')
`}
/>

<p>Unfortunately, this function will not return the content of the file you are trying to load. Loading a file can take quite a lot of time, and your browser cannot afford to do nothing while it waits for the file to load. So, file-loading functions are <a target="_blank" href="https://www.w3schools.com/js/js_asynchronous.asp">asynchronous</a>. They do the actual loading in the background and give you a <em>promise</em> as return value instead. You can use this <em>promise</em> to access the content of the file when the loading has finished.</p>

<p>Svelte also does not recommend loading data directly in the script of a component. Instead, data should be loaded the first time a component is actually shown on screen. Svelte provides the <CC language="javascript" code="onMount()"/> function for this purpose. It takes a function as argument and will run that function the first time your component is added to the DOM. There is also an <CC language="javascript" code="onDestroy()"/> function that you can use to clean up any dynamic resources you used.</p>

<p>Combining both points, the code to load a file becomes:</p>

<Code
language="javascript"
code={`let data = null;
onMount(async () => {
data = await csv('/myFile.csv');
});`}
/>

<p>Here, we initialize the data variable to <CC language="javascript" code="null"/>, indicating that the data is not available yet. Then, in the <CC language="javascript" code="onMount()"/> function we define an asynchronous callback. Within that callback, we use the <CC language="javascript" code="await" /> keyword to obtain the content of the file from the <em>promise</em> returned by <CC language="javascript" code="csv()"/> funtion call. Essentially, <CC language="javascript" code="await" /> tells JavaScript to wait until the task of a <em>promise</em> is done and return the value that task created. Then, we assign the content of the file to the <CC code="data"/> variable. Note that we do not know <em>when</em> the data will be loaded, only that it will happen. So, in the markup of our component, we should only create the components that use the data when it is available!</p>

<p>The actual exercise:</p>
<ol>
<li>Import <CC code="_exercise_scatterplot.svelte" /> in <CC code="Exercise.svelte" />.</li>
<li>In <CC code="_exercise_scatterplot.svelte" />, export a property called data towhich you can provide the data in the <CC code="ex_7.svelte" /> component.</li>
<li>Load the data in <CC code="Exercise.svelte" />, extract the countries for 1800 and pass them on to <CC code="_exercise_scatterplot.svelte" />. While the data is not loaded, you should show a message indicating the data is being loaded.</li>
<li>Build the scatterplot based on the values 'income' and 'life_exp'. <em>Hint: when your data contains missing value (as is the case with this dataset), data loading functions interpret entire columns with missing values as textual instead of numerical. That usually leads to difficult to debug behaviour as it breaks our scales. You can use a trick to force JavaScript to treat values as a number in scales: <CC language="javascript" code="xScale(+d.value)"/>.</em></li>
<li>Create an additional scale for the radius based on the 'population'.</li>
<li>Color the circles based on the 'continent'.</li>
<li>Add axes and labels.</li>
<li>Add a title.</li>
<li>Add a label for the year "1800" to the SVG.</li>
</ol>

<h5>Output</h5>

<div class="output">
	<Exercise />
</div>
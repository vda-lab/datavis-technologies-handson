<script>
	import CC from '$lib/ui/CodeInline.svelte';
	import Code from '$lib/ui/CodeBlock.svelte';

	import Exercise from './Exercise.svelte';
</script>

<h3>Exercise 2</h3>
<p>Interactivity is where Svelte shines; it automates a lot of processes that we want to update when values change. However, it can sometimes be confusing to reason about a svelte component. We do not always see at a glance what code will be updated when values change. It is important to remember that code in the script of a component is evaluated only when the component is constructed. Code in the HTML markup is evaluated any time a variable that is mentioned within the curly braces changes. If you want your script to re-evaluate certain statements when a variable changes, you have to use the <CC code="$:"/> notation:</p>

<Code
	language="svelte"
	code={`<\script>
export let myVariable;
console.log('This message is printed only once!')
$: console.log(\`This messages prints every time myVariable changes: \$\{myVariable\}\`);
</\script>
	`}
/>

<p>Remember that only variables that are mentioned within the scope of the <CC code="$:"/> statement are monitored for changes! Also know that two reactive statements do not cause an infinite loop when they change each other's values:</p>

<Code
	language="svelte"
	code={`<\script>
export let counter1=0;
export let counter2=0;

const increment1 = (_) => counter1+=1;
const increment2 = (_) => counter2+=1;

$: increment1(counter2);
$: increment2(counter1);
</\script>
	`}
/>

<p>In this example, if you change the value of <CC code="counter2" /> both counters will be incremented once. If you change the value of <CC code="counter1" /> only <CC code="counter2" /> will be incremented.</p>

<p>Sometimes, you also need to schedule the evaluation of a function, so that it will be evaluated some time in the future. JavaScript's <CC language="javascript" code="setInterval()"/> function can be used for that purpose. You give it a function and a delay-time and it will keep on calling your function with your specified pause in between calls until you either call <CC language="javascript" code="clearInterval()"/> or close the page.</p>

<p>For this exercise, you have to build a countdown light like they use in F1 racing. There are five lights that are off initially, then they turn red one-by-one from the right to the left. After all the lights are red, they switch to green simultaneously. The necessary data arrays are already created. Use the <CC code="points" /> arrary as x-coordinates of the circle elements and <CC code="index" /> as the index of the left-most light that should be on. If a light is on set the opacity to <CC code="1" />, otherwise use <CC code="0.3"/>. You should use the second argument of the each-block to capture the index
of the current iteration. Write a function that reduces the <CC code="index"/> every second. Once all lights are on, change color to <CC code="darkgreen"/> and stop the function from reducing the index further. The animation should
only start when the visualisation is visible! <em>Hint: remember how you loaded data when the component was first rendered in hte previous section.</em></p>

<h5>Output</h5>

<div class="output">
	<Exercise />
</div>
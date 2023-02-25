<script>
    import CC from "$lib/ui/CodeInline.svelte";
    import Code from "$lib/ui/CodeBlock.svelte";
  
    import Exercise from './Exercise.svelte'
</script>

<p>For this exercise, you have to edit the files <code>src/routes/exercises/htmlcssjavascript/exercise_11/Exercise.svelte</code> and <code>src/routes/exercises/htmlcssjavascript/exercise_11/Exercise_child.svelte</code>. Any changes you make to those files should show up below.</p>

<p>Having a clean data-flow throughout your application and component hierarchy is essential for maintainability. Svelte provides several ways in which you can pass along data between components. The easiest are component properties, which allow you to pass data from a parent to a child. The properties of a component are defined in the script tag using the <code>export</code> keyword. Suppose we have a component B.svelte with:</p>

<Code
  language="javascript"
  code={`<script>
  export let count = 0;
</script>

<p>{count}</p>`}/>

Now, in a parent component we can use component B:

<Code
  language="javascript"
  code={`<script>
  ...
  let myCountingVariable = 100;
</script>

<B count={myCountingVariable} />`}/>

<p>Note how we passed the information within <code>myCountingVariable</code> to the child component! We can also use B without specifing a value for <code>count</code>, then the default value as defined in <code>B.svelte</code> is used. Svelte has a couple of short-hand notions for this pattern, which can be confusing sometimes. Check out all variations in the <a href="https://svelte.dev/docs#template-syntax-attributes-and-props">documentation</a>.</p>

<p>Define a component property called answer in <code>Exercise_child.svelte</code>, import <code>Exercise_child.svelte</code> in <code>Exercise.svelte</code>, and use the child component with the value 42 as the <i>answer to life the universe and everything</i>.</p>


<h5>Output</h5>

<div class="output">
<Exercise />
</div>
<script>
    import Code from "$lib/ui/CodeBlock.svelte";
  
    import Exercise from './Exercise.svelte'
</script>

<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjavascript/exercise_12/Exercise.svelte</code>. Any changes you make to that file should show up below.</p>

<p>Sometimes you want to change the markup of your component depending on a condition in the script. For instance, when you only want to show a tooltip when a user hovers over a component. Svelte makes it easy to do this with their if-else blocks:</p>

<Code
  language="javascript"
  code={`{#if condition}
  ...
{:else}
  ...
{/if}`}/>

<p>Here, the condition is a JavaScript statement that evaluates to <code>true</code> or <code>false</code> and the markup you want to show in either case is put on the <code>...</code>.</p>

<p>Add an <code>if-else</code> block to <code>Ex12.svelte</code> that says <i>You have clicked the button!</i> when you have clicked the button and <i>You have to click the button!</i> when you have not clicked the button.</p>


<h5>Output</h5>

<div class="output">
<Exercise />
</div>
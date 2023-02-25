<script>
    import CC from "$lib/ui/CodeInline.svelte";
    import Code from "$lib/ui/CodeBlock.svelte";
  
    import Exercise from './Exercise.svelte'
</script>

<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjavascript/exercise_13/Exercise.svelte</code>. Any changes you make to that file should show up below.</p>

<p>Another common pattern you will encounter is displaying a list of similar items. You do not have to copy-pase and slightly change versions of the same code to do that. Instead, you should use Svelte's <code>each</code>-block, which allows you to create markup for every item in a list:</p>

<Code
  language="javascript"
  code={`{#each mylist as item}
...
{/each}`}/>

<p>Here, the body of the loop will be executed once for every item in the loop. Svelte will automatically update the page when the list changes. In some cases, you'll want svelte to know which items were removed or added. For instance, when using animations. Check out the <a href="https://svelte.dev/docs#template-syntax-each">documentation</a> for more information on this.</p>

<p>Use an <code>each</code> block to make an unordered list of the soccer players in the list. Each item in the list should look like:<p>

<code>Name (link-to-video)</code>

<h5>Output</h5>

<div class="output">
<Exercise />
</div>
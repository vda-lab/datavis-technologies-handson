<script>
    import CC from "$lib/ui/CodeInline.svelte";
    import Code from "$lib/ui/CodeBlock.svelte";
  
    import Exercise from './Exercise.svelte'
</script>

<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjavascript/exercise_06/Exercise.svelte</code>. Any changes you make to that file should show up below.</p>

<p>To change how things look, you can use CSS. There are two ways to apply CSS rules, you can define them inline with the HTML tags using the style attribute: <CC language="html" code="<span style='color: red'></span>"/> or you can define rules for all DOM elements that match a CSS selector in the <CC language="html" code="<style></style>"/>-tags of a Svelte component:</p>

<Code
  language="svelte"
  code={`<\style>
  p {
    color: red;
  }
<\/style>`}/>

<p>Usually, it is easiest to define styles within the <CC language="html" code="<style></style>"/>-tags. However, the inline form can be very useful if the value you want to apply depends on a value in your script because Svelte can not use JavaScript values within the <CC language="html" code="<style></style>"/>-tags!</p>

<p></p>Add a style element to <code>Exercise.svelte</code> that changes the font and text size, and sets the text color to steelblue. In addition, give the word really a different color from the other words.


<h5>Output</h5>

<div class="output">
<Exercise />
</div>
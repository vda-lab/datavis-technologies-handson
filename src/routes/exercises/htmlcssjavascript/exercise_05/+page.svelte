<script>
    import CC from "$lib/ui/CodeInline.svelte";
  
    import Exercise from './Exercise.svelte'
</script>

<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjavascript/exercise_05/Exercise.svelte</code>. Any changes you make to that file should show up below.</p>

<p>The last tag we want to demonstrate, and one you will use a lot, is the <CC language="html" code="<div></div>"/>-tag. It is used to group content together and describes how a page should be layed out. Generally, <CC language="html" code="<div></div>"/>-tags allow you to apply styling rules to their content. Several approaches to page-layout exist; this article provides a nice overview. You do not have to know how to build layouts by heart, but understanding the approaches helps when you try to get your content at a specific place on your page! This site already uses Bootstrap, so you can use their classes in the exercises if you want, but you are not required to.</p>

<p>By default, exercise components are centered horizontally on the page because they are placed within a <CC language="html" code="<div></div>"/>-tag configured to act as a flex-row. Consequently, individual tags within the exercise components are shown side by side. If you want to show tags below each other, you have to put them in a <CC language="html" code="<div></div>"/>-tag.</p>

<p>Make the two messages in <code>Exercise.svelte</code> appear below each other.</p>

<h5>Output</h5>

<div class="output">
<Exercise />
</div>
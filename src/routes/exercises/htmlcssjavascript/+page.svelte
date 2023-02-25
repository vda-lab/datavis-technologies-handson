<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";

  export let data;
</script>

<p>In this first set of exercises, we will look in the fundamentals of developing for the web, i.e. HTML, CSS and javascript.</p>

<p>The setup that we are using here is a <i>little</i> different from generic HTML/CSS/js because we want to organise everything within the same codebase.</p>


<p>In Svelte, web pages are build up from reusable components that include all HTML, CSS, and JavaScript functionality to make a single functional item. Components are implemented in <CC code=".svelte" /> files, which contain three (optional) blocks of code:

<Code
  language="svelte"
  code={`<!--- JavaScript code --->
<\script>
  const world = 'world';
</\script>

<!--- HTML markup --->
<p>Hello {world}!</p>

<!--- CSS markup --->
<\style>
  p {
    font-weight: 600;
  }
</\style>`}
/>

<p>By putting all relevant code of a single component in one place, it becomes easier to develop websites and reduces the chance of breaking something when you make changes to a single component. Another big benefit of Svelte is that it makes it easy to put values from your script onto a page. In the example above, we printed the string in the variable <code>world</code> into the <CC language="html" code="<p></p>" /> tags. Svelte will automatically update the value in the <CC language="javascript" code="world" /> into the <CC language="html" code="<p></p>" /> tags when the value of the variable changes.</p>

<h2>Exercises</h2>
<ul>
{#each data.pages as exercise}
<li><a href={"htmlcssjavascript/" + exercise.url.replace("+page.svelte","")}>{exercise.name}</a></li>
{/each}
</ul>

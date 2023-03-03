<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 5</h3>
<p>
  The last tag we want to demonstrate, and one you will use a lot, is the <CC
    language="html"
    code="<div></div>"
  />-tag. It is used to group content together and describes how a page should
  be layed out. Generally, <CC language="html" code="<div></div>" />-tags allow
  you to apply styling rules to their content. Several approaches to page-layout
  exist;
  <a
    target="_blank"
    rel="noreferrer"
    href="https://blog.hubspot.com/website/css-grid-vs-flexbox">this article</a
  >
  provides a nice overview. You do not have to know how to build layouts by heart,
  but understanding the approaches helps when you try to get your content at a specific
  place on your page! This site already uses
  <a
    target="_blank"
    rel="noreferrer"
    href="https://getbootstrap.com/docs/5.1/layout/grid/">Bootstrap</a
  >, so you can use their classes in the exercises if you want, but you are not
  required to.
</p>

<p>
  Make the two messages in <code>Exercise.svelte</code> appear below each other
  by wrapping them in <CC language="html" code="<div></div>" />-tags.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

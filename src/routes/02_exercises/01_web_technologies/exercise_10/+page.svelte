<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";

  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 10</h3>

<p>
  A big part of development in Svelte is combining multiple components to build
  a more complex component. Before you can use a component within another
  component, you first have to import it, which is done in the JavaScript part
  of a component:
</p>

<Code language="javascript" code={`import A from 'a.svelte'`} />

<p>
  Now, you can use the component just like an HTML tag in the markup part of the
  component. Svelte components should always be imported using a name that
  starts with a capital letter, otherwise it will be interpreted as an HTML tag
  and not a Svelte component when you use it!
</p>

<p>
  JavaScript also has a slight variation of this importing syntax, which is more
  often used with JavaScript files than with Svelte files:
</p>

<Code language="javascript" code={`import {a, b, c} from a.js`} />

<p>
  In this variant, which uses <a
    target="_blank"
    rel="noreferrer"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    >object destructuring</a
  >, you do not import the full module defined in <code>a.js</code> but just the
  individual functions and variables that you want to use. You will see both variants
  in this course, but remember, Svelte components should be imported without curly
  braces and individual functions or variables from javascript files should be imported
  with curly braces.
</p>

<p>
  Import the components of Exercise 3 and 2 and use them inside a <CC
    code={`<div></div>`}
  /> tag so that Exercise 3's component is above Exercise 2's component.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

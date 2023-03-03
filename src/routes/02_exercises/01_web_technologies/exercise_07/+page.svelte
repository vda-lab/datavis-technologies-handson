<script>
  import Code from "$lib/ui/CodeBlock.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 7</h3>
<p>
  Svelte makes it easy to use JavaScript code in your components. In the
  following exercises, we briefly cover the basics of JavaScript. We recommend
  that you check out <a
    target="_blank"
    rel="noreferrer"
    href="https://eloquentjavascript.net/">Eloquent JavaScript</a
  >
  if you want more information because JavaScript has many strange
  <a
    target="_blank"
    rel="noreferrer"
    href="https://www.destroyallsoftware.com/talks/wat">corner cases</a
  >!
</p>
<p>
  Variables are a fundamental aspect of programming. They allow you to keep
  track of your program's state. In JavaScript, you can define two types of
  variables: (1) constant variables that can not change value:
</p>

<Code language="javascript" code={`const my_variable = 10;`} />

and (2) mutable variables that can change value:

<Code language="javascript" code={`let my_variable = 10;`} />

<p>
  We recommend that you define all your variables as constant to start with.
  Only make them mutable when it is needed. In old code, you may see variables
  initialized with the <code>var</code> keyword. This is a sign that the code
  you are looking at is old and you should take care when using it! Do not use
  the <code>var</code> keyword in code for these exercises.
</p>

<p>
  Define a constant variable with your lucky number as value in this folder's <code
    >./Exercise.svelte</code
  >
  and complete the message with the variable's value.
  <i>
    Hint: see the hello-world example in the introduction of the exercise group!
  </i>
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

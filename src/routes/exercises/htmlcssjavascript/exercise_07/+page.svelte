<script>
    import Code from "$lib/ui/CodeBlock.svelte";
  
    import Exercise from './Exercise.svelte'
</script>

<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjavascript/Exercise.svelte</code>. Any changes you make to that file should show up below.</p>

<p>Svelte makes it easy to use JavaScript code in your components. In the following exercises, we briefly cover the basics of JavaScript. We recommend that you check out <a href="https://eloquentjavascript.net/">Eloquent JavaScript</a> if you want more information because JavaScript has many strange <a href="https://www.destroyallsoftware.com/talks/wat">corner cases</a>!</p>

<p>Variables are a fundamental aspect of programming. They allow you to keep track of your program's state. In JavaScript, you can define two types of variables: constant variables that can not change value:</p>

<Code
  language="javascript"
  code={`const my_variable = 10;`}/>

and mutable variables that can change value:

<Code
  language="javascript"
  code={`let my_variable = 10;`}/>

<p>We recommend that you define all your variables as constant to start with. Only make them mutable when it is needed. In old code, you may see variables initialized with the <code>var</code> keyword. This is a sign that the code you are looking at is old and you should take care when using it! Do not use the <code>var</code> keyword in code for these exercises.</p>

<p>Define a constant variable with your lucky number as value. Complete the message with the variable's value. <i>Hint: see the hello-world example at the beginning!</i></p>


<h5>Output</h5>

<div class="output">
<Exercise />
</div>
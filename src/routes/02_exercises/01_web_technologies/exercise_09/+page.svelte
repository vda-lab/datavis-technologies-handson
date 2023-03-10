<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";

  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 9</h3>

<p>
  Another fundamental aspect of programming are functions. There are two ways to
  define functions. The traditional approach:
</p>

<Code
  language="javascript"
  code={`function add(x, y) {
  return x + y;
}`}
/>

<p>and two inline variants:</p>

<Code
  language="javascript"
  code={`const add = (x, y) => {
  return x + y;
};`}
/>
<Code
  language="javascript"
  code={`const add = (x, y) => x + y;`}
/>

<p>
  When you use brackets (<CC code={`\{ \}`} />) in the inline version, you have
  to specify a return value explicitly. If you do not use brackets (<CC
    code={`\{ \}`}
  />), the value after the arrow (<CC code="=>" />) is returned automatically.
</p>

<p>
  The inline variants are often useful for simple functions that modify or
  extract a value from the argument they are given. Often in cases where you do
  not have to give them a name. For larger functions, or functions that you use
  in multiple places, we recommend that you use the traditional syntax.
</p>

<p>
  When you are using functions, it is important to understand where the function
  will find the variables that you use. The places where a variable can be
  accessed is called its <a
    target="_blank"
    rel="noreferrer"
    href="https://www.w3schools.com/js/js_scope.asp">scope</a
  >. Scope always depends on where variables and functions are defined! For
  example, in a Svelte component, variables that are defined directly in the <CC
    code={`<script> </script>`}
    language="html"
  />-tag have a global scope. They can be accessed by all functions defined in
  the component. Variables that are defined in a function can only be accessed
  within that function, or by functions that are defined within that function.
  So, in this example below, <CC code={`enabled`} /> can be accessed within the
  <CC code="add()" language="javascript" /> function, but <CC code={`x`} /> and
  <CC code={`y`} /> can not be accessed outside the add function:
</p>

<Code
  language="javascript"
  code={`// enabled is global to the Svelte component
let enabled = true;

function add(x, y) {
  // x and y are local to the add function
  return enabled ? x + y : null;
}`}
/>

<p>
  Later in the course, we will use more complex <a
    target="_blank"
    rel="noreferrer"
    href="https://eloquentjavascript.net/05_higher_order.html"
    >higher-order functions</a
  >, i.e, functions that return a function. In those cases, the variables
  defined in the outer function can be used in the inner function. For example,
  here we defined a <CC code="clamper()" language="javascript" /> function that takes
  a minimum and maximum value and returns a function that clamps the number it is
  given to the specified range:
</p>

<Code
  language="javascript"
  code={`function clamper(min, max) {
  return (num) => Math.min(Math.max(num, min), max);
}

const clamp = clamper(-1, 1);
console.log(clamp(2));`}
/>

<p>
  In this example, min and max are local to <CC
    code="clamper()"
    language="javascript"
  /> but they are accessible in the inline-function defined in <CC
    code="clamper()"
    language="javascript"
  />. In the next exercise group, we will cover d3.js, which uses this
  construction a lot. Fortunately, using functions like these is a lot simpler
  than writing them! So, it is ok if this example was confusing to you.
</p>

<hr />

<p>
  Define a function that computes the circumference of a sphere from a radius.
  Use your function to show and fill in this message "<i
    >The circumference of a circle with radius ...m is ...m .</i
  >" in a paragraph. Show the circumference up to 2 decimals.
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

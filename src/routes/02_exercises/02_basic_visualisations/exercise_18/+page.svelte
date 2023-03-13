<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 18</h3>
<p>
  Now lets add an axis to the previous exercise so that we can read the
  x-coordinates of the circles. You will need to import <CC code="axisBottom" />
  from the
  <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://github.com/d3/d3-axis">d3-axis</a
  >
  module and <CC code="select" /> from the
  <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://github.com/d3/d3-selection">d3-selection</a
  >
  module. Similar to the scales you used in the previous exercise, the functions
  that you import from d3 return a function that actually creates the axis:
  <CC code="const xAxis = axisBottom(...)" language="javascript" />. In this
  case, you need to specify which scale the axis should use. Then,
  <CC code="xAxis" /> will be a function that takes a handle to a DOM element and
  fills that DOM element with the parts that build up the axis. Typically we add
  a specific
  <CC language="svelte" code="<g></g>" />-tags to use as DOM element for an
  axis, remember to apply a translation so that the content of the element is in
  the bottom margin of the SVG.
  <em
    >Hint: if you forget to do this, the axis may be invisible because it is
    drawn outside of the SVG.</em
  >
</p>
<p>
  Calling functions with DOM element handles is different from calling normal
  functions, as those handles only exist when the DOM is constructed, which
  happens after a component's script has executed. In Svelte, you can use the <CC
    language="svelte"
    code="<g use:myFunction></g>"
  />
  syntax to specify an
  <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://svelte.dev/docs#template-syntax-element-directives-use-action"
    >action</a
  >, i.e., a function that has to be called with the handle to an element as
  argument as soon as that handle becomes available. In context, an action could
  look like this:
</p>

<Code
  language="svelte"
  code={`<script>
  function myFunction(handle){
    console.log('Action called');
  }

  console.log('Script finished');
</script>

<svg>
  <g use:myFunction>
    ...
  </g>
</svg>
`}
/>

<p>
  In this example, the "Script finished!" message will appear before the "Action
  called" message! One final point, d3.js uses <em>selections</em> as handles to
  elements instead of raw HTML handles. So the axis-function has to be called
  with <CC language="javascript" code="xAxis(select(handle))" /> rather than <CC
    language="javascript"
    code="xAxis(handle)"
  />!
</p>

<p>
  Most open source visualizations that use d3-axes with Svelte tend to use
  another approach. They tend to use <CC
    code={"<g bind:this={variable}></g>"}
    language="svelte"
  /> to capture the handle of an element and use that variable within the
  <CC language="javascript" code="onMount()" /> function to construct the axis. While
  this approach works, it is easy to make mistakes by accessing the
  <CC code="variable" /> before it contains a value. These types of mistakes are
  avoided with actions.
</p>
<hr />

<p>
  Copy your answer from Exercise 17 to this exercise. Then, add an x-axis to the
  visualization. Also add a text label indicating that it is the x-axis, use the <em
    >currentcolor</em
  >
  for the label (<em
    >otherwise the label will be white on a white background!</em
  >) and center the label on the x-axis.
</p>
<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

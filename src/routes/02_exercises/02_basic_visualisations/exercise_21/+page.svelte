<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 21</h3>

<p>
  Its time to combine all what you've learned so far and build a static version
  of the gapminder visualization by Hans Rosling. Use the data stored in <CC
    code="static/data/gapminder.json"
  />. The data includes an array of objects storing two keys in each object;
  'countries' and 'year'. For this exercise, you will need to extract the first
  object from the array (year 1800) and use the array stored in the 'countries'
  key as data for your scatterplot visualization.
</p>
<p>
  d3.js provides several functions in the
  <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://github.com/d3/d3-fetch">d3-fetch</a
  >
  module that load data. All of them follow the same structure. For example, to load
  a hypothetical file <CC code="myFile.csv" /> located in the <CC
    code="static"
  /> folder, you would use:
</p>
<Code language="javascript" code={`csv('/myFile.csv')`} />

<p>
  <em
    >Notice that all files and folders contained in the static folder are
    accessible from the root of the website '/'!
  </em>
</p>
<p>
  Unfortunately, this loading function will not return the content of the file
  you are trying to load. Loading a file can take quite a lot of time, and your
  browser cannot afford to do nothing while it waits for the file to load. So,
  file-loading functions are <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="https://www.w3schools.com/js/js_asynchronous.asp">asynchronous</a
  >. They do the actual loading in the background and give you a
  <em>promise</em> as return value instead. You can use this <em>promise</em> to
  access the content of the file when the loading has finished.
</p>
<p>
  Svelte also does not recommend loading data directly in the script of a
  component. Instead, data should be loaded the first time a component is
  actually shown on screen. Svelte provides the <CC
    language="javascript"
    code="onMount()"
  /> function for this purpose. It takes a function as argument and will run that
  function the first time your component is added to the DOM. There is also an <CC
    language="javascript"
    code="onDestroy()"
  /> function that you can use to clean up any dynamic resources you used.
</p>
<p>Combining both points, the code to load a file becomes:</p>
<Code
  language="svelte"
  code={`<script>
  let data = null;
  onMount(async () => {
    console.log("onMount started!");
    data = await csv('/myFile.csv');
    console.log("Data loaded!");
  });
  console.log("Script finished!")
</script>`}
/>
<p>
  Here, we initialize the data variable to <CC
    language="javascript"
    code="null"
  />, indicating that the data is not available yet. Then, in the <CC
    language="javascript"
    code="onMount()"
  /> function we define an asynchronous callback. Within that callback, we use the
  <CC language="javascript" code="await" /> keyword to obtain the content of the
  file from the <em>promise</em> returned by <CC
    language="javascript"
    code="csv()"
  />. Essentially, <CC language="javascript" code="await" /> tells JavaScript to
  wait until the task of a <em>promise</em> is done and return the value that
  task created. Then, we assign the content of the file to the <CC
    code="data"
  /> variable. Note that we do not know <em>when</em> the data will be loaded, only
  that it will happen. In this example the order of messages will be "Script finished!",
  "onMount started!", and finally "Data loaded!". So, you have to be careful that
  you only access the data in your component when it is available! The best way to
  do that is to load the data in a one component and construct a child component
  that actually builds the visualization when the data has finished loading. That
  way you can freely access all aspects of the data in that child component without
  having to worry wether it has finished loading!
</p>
<hr />
<ol>
  <li>
    Import <CC code="Scatterplot.svelte" /> in <CC code="Exercise.svelte" />.
  </li>
  <li>
    In <CC code="Scatterplot.svelte" />, export a property called
    <CC code="data" /> to which you can provide the data in the <CC
      code="Exercise.svelte"
    /> component.
  </li>
  <li>
    Load the data in <CC code="Exercise.svelte" />, extract the countries for
    1800 and pass them on to <CC code="Scatterplot.svelte" />. While the data is
    not loaded, you should show a message indicating the data is being loaded.
  </li>
  <li>
    Build the scatterplot based on the values 'income' and 'life_exp'. <em>
      Hint: when your data contains missing value (as is the case with this
      dataset), data loading functions interpret entire columns with missing
      values as textual instead of numerical. That usually leads to difficult to
      debug behaviour as it breaks our scales. You can use a trick to force
      JavaScript to treat values as a number in scales: <CC
        language="javascript"
        code="xScale(+d.value)"
      />.
    </em>
  </li>
  <li>
    Create and apply an additional scale for the radius based on the
    'population'.
  </li>
  <li>Color the circles based on the 'continent'.</li>
  <li>Add axes and labels.</li>
  <li>Add a title.</li>
  <li>Add a label for the year "1800".</li>
</ol>
<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

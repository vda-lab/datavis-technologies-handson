<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";
  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 24</h3>

<p>
  It's time to make the gapminder scatterplot interactive. We have already
  prepared a static version for you. Note that we load the data in <CC
    code="Exercise.svelte"
  /> as you learned in Exercise 21. At the end of this exercise, we want to be able
  to show all the years in the data as an animation. To do that, you have to add
  a play-pause button, a reset button, and a slider that indicates and controls which
  year is shown. The label of the slider should contain the currently shown year,
  so it is easy to read! Finally, you have to add a drop-down menu which can be used
  to filter which continent's countries are shown.
</p>
<p>
  The visualization uses three components, each with a separate responsibility:
</p>
<ul>
  <li>
    <CC code="Scatterplot.svelte" /> creates a scatter plot of the data it is given,
  </li>
  <li>
    <CC code="Controls.svelte" /> contains the interactive elements that control
    which year and continents are shown,
  </li>
  <li>
    <CC code="Exercise.svelte" /> manages the data, e.g., loading and extracting
    the selected year and continents. JavaScript contains a very useful array manipulation
    function that extracts items from an array that meet a certain condition:
    <Code
      language="javascript"
      code="const higherThanFive = array.filter(d => d > 5);"
    />
  </li>
</ul>

<hr />

<p>So, perform these steps:</p>
<ol>
  <li>
    In <CC code="Controls.svelte" />, add component properties for the currently
    selected year and continents. The year should be stored as an index into the
    <CC code="data" /> array (i.e., the value 0 corresponds to 1800 and the value
    10 to 1810). Also add the described buttons, slider, and drop-down menu that
    manipulate the value of these component properties. Note, the animation should
    loop-back to the start when it reaches the end. The reset button should stop
    the animation if it is active and set 1800 as the selected year.
    <em>
      Hint: to create the animation, remember how you scheduled a function to be
      executed in an interval in the previous exercise!
    </em>
  </li>
  <li>
    In <CC code="Exercise.svelte" />, observe the selected year and continent as
    exposed by <CC code="Controls.svelte" /> using a <CC code="bind" />. Then,
    define a function that extracts the selected data using the selected year
    and continents variables. Finally, only pass the selected data to the <CC
      code="Scatterplot.svelte"
    /> component.
  </li>
</ol>
<p>
  You should now have an interactive GapMinder visualisation! As in Exercise 22,
  you can use <a
    class="link-primary"
    rel="noreferrer"
    target="_blank"
    href="https://getbootstrap.com/docs/4.0/components/forms/">boostrap</a
  >
  to make the input elements look nice.
  <em>
    Hint: does your visualisation break when the slider reaches the end? Then
    you probably made an off-by-one error by allowing the slider's value to
    reach 1 item passed the end of the data array!
  </em>
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

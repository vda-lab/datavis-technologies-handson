<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";

  import Ex1 from './Ex1.svelte'
  import Ex2 from './Ex2.svelte'
  import Ex3 from './Ex3.svelte'
  import Ex4 from './Ex4.svelte'
  import Ex5 from './Ex5.svelte'
  import Ex6 from './Ex6.svelte'
  import Ex7 from './Ex7.svelte'
  import Ex8 from './Ex8.svelte'
  import Ex9 from './Ex9.svelte'
  import Ex10 from './Ex10.svelte'
  import Ex11 from './Ex11.svelte'
  import Ex12 from './Ex12.svelte'
  import Ex13 from './Ex13.svelte'
  import Ex14 from './Ex14.svelte'
</script>

<p>This page contains exercises limited to HTML and CSS. In Svelte, web pages are build up from reusable components that include all HTML, CSS, and JavaScript functionality to make a single functional item. Components are implemented in <CC code=".svelte" /> files, which contain three (optional) blocks of code:

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

<p>By putting all relevant code of a single component in one place, it becomes easier to develop websites and reduces the chance of breaking something when you make changes to a single component. Another big benefit of Svelte is that it makes it easy to put values from your script onto a page. In the example above, we printed the string in the variable <code>world</code> into the <CC language="html" code="<p></p>" /> tags. Svelte will automatically update the value in the <CC language="javascript" code="world" /> into the <CC language="html" code="<p></p>" /> tags when the value of the variable changes.

<hr>

<h3>Exercise 1</h3>
<p>Open the file <code>src/routes/exercises/htmlcssjs/Ex1.svelte</code> and</p>
<ul>
    <li>replace the ellipsis (<code>...</code>) with your name
    <li>make your name bold</li>
    <li>make it red instead of green</li>
    <li>remove the <code>style</code> block and make the CSS inline</li>
</ul>

<h5>Output</h5>

<div class="output">
<Ex1 />
</div>

<hr>

<h3>Exercise 2</h3>
<p>Open the file <code>src/routes/exercises/htmlcssjs/Ex2.svelte</code> and add headers of all sizes. Your output should look like this:</p>

<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>

<h5>Output</h5>

<div class="output">
<Ex2 />
</div>

<hr>
<h3>Exercise 3</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex3.svelte</code> . Any changes you make to that file should show up below.</p>

<p>There are also several tags that layout text. For example, tags that make paragraphs and lists. In the <code>Ex3.svelte</code> file, add a paragraph saying <i>"The best visual channels ordered by Mackinlay's ranking:"</i> and an ordered list containing the items: <var>position</var>, <var>length</var>, and <var>angle</var>.</p>

<h5>Output</h5>

<div class="output">
<Ex3 />
</div>

<hr>

<h3>Exercise 4</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex4.svelte</code>. Any changes you make to that file should show up below.</p>

<p>You can also use <a class="link-secondary" target="_blank" href="https://www.w3schools.com/tags/default.asp">tags</a> that format text. These tags are inline: they do not change where text is shown, only how it is shown. Within <code>Ex4.svelte</code>, use tags to <em>emphasize</em> the word <code>marks</code>, <s>strike through</s> the word <code>basic</code>, and make <code>geometric elements</code> appear <strong>bold</strong>.</p>

<h5>Output</h5>

<div class="output">
<Ex4 />
</div>

<hr>

<h3>Exercise 5</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex5.svelte</code>. Any changes you make to that file should show up below.</p>

<p>The last tag we want to demonstrate, and one you will use a lot, is the <CC language="html" code="<div></div>"/>-tag. It is used to group content together and describes how a page should be layed out. Generally, <CC language="html" code="<div></div>"/>-tags allow you to apply styling rules to their content. Several approaches to page-layout exist; this article provides a nice overview. You do not have to know how to build layouts by heart, but understanding the approaches helps when you try to get your content at a specific place on your page! This site already uses Bootstrap, so you can use their classes in the exercises if you want, but you are not required to.</p>

<p>By default, exercise components are centered horizontally on the page because they are placed within a <CC language="html" code="<div></div>"/>-tag configured to act as a flex-row. Consequently, individual tags within the exercise components are shown side by side. If you want to show tags below each other, you have to put them in a <CC language="html" code="<div></div>"/>-tag.</p>

<p>Make the two messages in <code>Ex5.svelte</code> appear below each other.</p>

<h5>Output</h5>

<div class="output">
<Ex5 />
</div>

<hr>

<h3>Exercise 6</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex6.svelte</code>. Any changes you make to that file should show up below.</p>

<p>To change how things look, you can use CSS. There are two ways to apply CSS rules, you can define them inline with the HTML tags using the style attribute: <CC language="html" code="<span style='color: red'></span>"/> or you can define rules for all DOM elements that match a CSS selector in the <CC language="html" code="<style></style>"/>-tags of a Svelte component:</p>

<Code
  language="svelte"
  code={`<\style>
  p {
    color: red;
  }
<\/style>`}/>

<p>Usually, it is easiest to define styles within the <CC language="html" code="<style></style>"/>-tags. However, the inline form can be very useful if the value you want to apply depends on a value in your script because Svelte can not use JavaScript values within the <CC language="html" code="<style></style>"/>-tags!</p>

<p></p>Add a style element to <code>Ex6.svelte</code> that changes the font and text size, and sets the text color to steelblue. In addition, give the word really a different color from the other words.

<h5>Output</h5>

<div class="output">
<Ex6 />
</div>

<hr>

<h3>Exercise 7</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex7.svelte</code>. Any changes you make to that file should show up below.</p>

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
<Ex7 />
</div>

<hr>

<h3>Exercise 8</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex8.svelte</code>. Any changes you make to that file should show up below.</p>

<p>Two data types that you will encouter a lot in this course are lists and objects. Lists contain a sequence of values that do not have to be of the same type. However, it is easier to work with lists that only include the same kind of item, i.e., only numbers or only strings. You can construct and access values in a list as follows:</p>

<Code
  language="javascript"
  code={`const myList = [0, 1, 2, 3, 'a', 'b', null];
console.log(myList[0]);
console.log(myList[1]);`}/>

<p>It is also possible to append or remove items from a list using the <code>.push()</code> and <code>.pop()</code> member functions.</p>

<p>Objects contain properties, i.e., key-value pairs. We typically use them to represent a data table's row in this course. To construct an object, you can specify the key and value explicitly:</p>

<Code
  language="javascript"
  code={`const student = { name: 'J. Doe', number: 243901};
// Two ways to access the properties:
console.log(student.name);
console.log(student['number']);
// Add properties by assigning to them
student.curriculum = 'Statistics';`}/>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Object destructuring</a> provides another syntax to construct and retrieve values from an object. In this variant, the names of the variables are used as keys:</p>

<Code
  language="javascript"
  code={`const name = 'J. Doe';
const number = 243901;
const student = { name, number };`}/>

<p>Extracting specific properties from an object works very similar:</p>

<Code
  language="javascript"
  code={`const { name } = student;`}/>

<p>An important thing to realize is, although these variables were defined with <code>const</code>, it is possible to change values within the list or properties of the object. There is a fundamental difference in changing a list's or object's content and assigning a different list or object to a variable! So, updating values is allowed:</p>

<Code
  language="javascript"
  code={`myList[4] = 4;
student.name = 'M. Doe';`}/>

<p>But assigning different lists or objects is not when the variable is constant!</p>

<Code
  language="javascript"
  code={`myList = ['a', 'new', 'list'];
student = {name: 'Not Allowed'};`}/>

<p>Note that primitive types, such as numbers, are their content. So, you can not change the value of a constant variable that contains a number, but you can change the content of a list in a constant variable!</p>

<p>Create an object containing your name and a list of your favourite things. Show and fill in this message <i>"My name is ... and these are some of my favourite things: ... ."</i> in a paragraph. Hint: the list does not have to look good yet.</p>

<h5>Output</h5>

<div class="output">
<Ex8 />
</div>

<hr>

<h3>Exercise 9</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex9.svelte</code>. Any changes you make to that file should show up below.</p>

<p>Another fundamental aspect of programming are functions. There are two ways to define functions. The traditional approach:</p>

<Code
  language="javascript"
  code={`function add(x, y) {
  return x + y;
}`}/>

<p>and two inline variants:</p>

<Code
  language="javascript"
  code={`const add = (x, y) => {
  return x + y;
};`}/>
<Code
language="javascript"
code={`
const add = (x, y) => x + y;`}/>

<p>When you use brackets (<CC code={`\{ \}`} />) in the inline version, you have to specify a return value explicitly. If you do not use brackets (<CC code={`\{ \}`} />), the value after the arrow (<code>=></code>) is returned automatically.</p>

<p>The inline variants are often useful for simple functions that modify or extract a value from the argument they are given. Often in cases where you do not have to give them a name. For larger functions, or functions that you use in multiple places, we recommend that you use the traditional syntax.</p>

<p>When you are using functions, it is important to understand where the function will find the variables that you use. The places where a variable can be accessed is called its <a href="https://www.w3schools.com/js/js_scope.asp">scope</a>. Scope always depends on where variables and functions are defined! For example, in a Svelte component, variables that are defined directly in the <CC code={`<script> </script>`}/>-tag have a global scope. They can be accessed by all functions defined in the component. Variables that are defined in a function can only be accessed within that function, or by functions that are defined within that function. So, in this example, enabled can be accessed within the <code>add()</code> function, but x and y can not be accessed outside the add function:</p>

  <Code
  language="javascript"
  code={`// enabled is global to the Svelte component
let enabled = true;

function add(x, y) {
  // x and y are local to the add function
  return enabled ? x + y : null;
}`}/>

<p>Later in the course, you will see more complex <a href="https://eloquentjavascript.net/05_higher_order.html">higher-order functions</a>, i.e, functions that return functions. In those cases, the variables defined in the outer function can be used in the inner function. For example, here we defined a <code>clamper()</code> function that takes a minimum and maximum value and returns a function that clamps the number it is given to the specified range:</p>

<Code
  language="javascript"
  code={`function clamper(min, max) {
  return (num) => Math.min(Math.max(num, min), max);
}

const clamp = clamper(-1, 1);
console.log(clamp(2));`}/>

<p>In this example, min and max are local to <code>clamper()</code> but they are accessible in the inline-function defined in <code>clamper()</code> Next week, we will cover d3.js, which uses this construction a lot. Fortunately, using functions like these is a lot simpler than writing them! So, it is ok if this example was confusing to you.</p>

<p>Define a function that computes the circumference of a sphere from a radius. Use your function to show and fill in this message "<i>The circumference of a circle with radius ...m is ...m .</i>" in a paragraph. Show the circumference up to 2 decimals.</p>

<h5>Output</h5>

<div class="output">
<Ex9 />
</div>

<hr>

<h3>Exercise 10</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex10.svelte</code>. Any changes you make to that file should show up below.</p>

<p>A big part of development in Svelte is combining multiple components to build a more complex component. Before you can use a component within another component, you first have to import it, which is done in the JavaScript part of a component:</p>

<Code
  language="javascript"
  code={`import A from 'a.svelte'`}/>

<p>Now, you can use the component just like an HTML tag in the markup part of the component. Svelte components should always be imported using a name that starts with a capital letter, otherwise it will be interpreted as an HTML tag and not a Svelte component when you use it!</p>

<p>JavaScript also has a slight variation of this importing syntax which is more often used with JavaScript files than with Svelte files:</p>

<Code
  language="javascript"
  code={`import {a, b, c} from a.js`}/>

<p>In this variant, which uses <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">object destructuring</a>, you do not import the full module defined in <code>a.js</code> but just the individual functions and variables that you want to use. You will see both variants in this course, but remember, Svelte components should be imported without curly braces and individual functions or variables from javascript files should be imported with curly braces.</p>

<p>Import the components of Exercise 3 and 2 and use them inside a <CC code={`<div></div>`}/> tag so that Exercise 3's component is above Exercise 2's component.</p>

<h5>Output</h5>

<div class="output">
<Ex10 />
</div>

<hr>

<h3>Exercise 11</h3>
<p>For this exercise, you have to edit the files <code>src/routes/exercises/htmlcssjs/Ex11.svelte</code> and <code>src/routes/exercises/htmlcssjs/Ex11_child.svelte</code>. Any changes you make to those files should show up below.</p>

<p>Having a clean data-flow throughout your application and component hierarchy is essential for maintainability. Svelte provides several ways in which you can pass along data between components. The easiest are component properties, which allow you to pass data from a parent to a child. The properties of a component are defined in the script tag using the <code>export</code> keyword. Suppose we have a component B.svelte with:</p>

<Code
  language="javascript"
  code={`<script>
  export let count = 0;
</script>

<p>{count}</p>`}/>

Now, in a parent component we can use component B:

<Code
  language="javascript"
  code={`<script>
  ...
  let myCountingVariable = 100;
</script>

<B count={myCountingVariable} />`}/>

<p>Note how we passed the information within <code>myCountingVariable</code> to the child component! We can also use B without specifing a value for <code>count</code>, then the default value as defined in <code>B.svelte</code> is used. Svelte has a couple of short-hand notions for this pattern, which can be confusing sometimes. Check out all variations in the <a href="https://svelte.dev/docs#template-syntax-attributes-and-props">documentation</a>.</p>

<p>Define a component property called answer in <code>Ex11_child.svelte</code>, import <code>Ex11_child.svelte</code> in <code>Ex11.svelte</code>, and use the child component with the value 42 as the <i>answer to life the universe and everything</i>.</p>

<h5>Output</h5>

<div class="output">
<Ex11 />
</div>

<hr>

<h3>Exercise 12</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex12.svelte</code>. Any changes you make to that file should show up below.</p>

<p>Sometimes you want to change the markup of your component depending on a condition in the script. For instance, when you only want to show a tooltip when a user hovers over a component. Svelte makes it easy to do this with their if-else blocks:</p>

<Code
  language="javascript"
  code={`{#if condition}
  ...
{:else}
  ...
{/if}`}/>

<p>Here, the condition is a JavaScript statement that evaluates to <code>true</code> or <code>false</code> and the markup you want to show in either case is put on the <code>...</code>.</p>

<p>Add an <code>if-else</code> block to <code>Ex12.svelte</code> that says <i>You have clicked the button!</i> when you have clicked the button and <i>You have to click the button!</i> when you have not clicked the button.</p>


<h5>Output</h5>

<div class="output">
<Ex12 />
</div>

<hr>

<h3>Exercise 13</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex13.svelte</code>. Any changes you make to that file should show up below.</p>

<p>Another common pattern you will encounter is displaying a list of similar items. You do not have to copy-pase and slightly change versions of the same code to do that. Instead, you should use Svelte's <code>each</code>-block, which allows you to create markup for every item in a list:</p>

<Code
  language="javascript"
  code={`{#each mylist as item}
...
{/each}`}/>

<p>Here, the body of the loop will be executed once for every item in the loop. Svelte will automatically update the page when the list changes. In some cases, you'll want svelte to know which items were removed or added. For instance, when using animations. Check out the <a href="https://svelte.dev/docs#template-syntax-each">documentation</a> for more information on this.</p>

<p>Use an <code>each</code> block to make an unordered list of the soccer players in the list. Each item in the list should look like:<p>

<code>Name (link-to-video)</code>

<h5>Output</h5>

<div class="output">
<Ex13 />
</div>

<hr>

<h3>Exercise 14</h3>
<p>For this exercise, you have to edit the file <code>src/routes/exercises/htmlcssjs/Ex14.svelte</code>. Any changes you make to that file should show up below.</p>

<p>In custom data visualizations it is common that you want to change a data point's visual encoding when it becomes selected. An easy way to do this is to define a CSS class that overrides the attributes you want to change and assign that class when a data point becomes selected. Svelte supports assigning classes based on a condition in the component's script:</p>

<Code
  language="javascript"
  code={`<p class:myClassName={condition} />`}/>

<p>Define a class that changes the background of the button when it is assigned and assign it to only the last-clicked button. No button should have the class when no button has been clicked yet.</p>

<h5>Output</h5>

<div class="output">
<Ex14 />
</div>

<script>
  import CC from "$lib/ui/CodeInline.svelte";
  import Code from "$lib/ui/CodeBlock.svelte";

  import Exercise from "./Exercise.svelte";
</script>

<h3>Exercise 8</h3>

<p>
  Two data types that you will encounter a lot in this course are lists and
  objects. Lists contain a sequence of values that do not have to be of the same
  type. However, it is easier to work with lists that only include the same kind
  of item, i.e., only numbers or only strings. You can construct and access
  values in a list as follows:
</p>

<Code
  language="javascript"
  code={`const myList = [0, 1, 2, 3, 'a', 'b', null];
console.log(myList[0]);
console.log(myList[1]);`}
/>

<p>
  It is also possible to append or remove items from a list using the
  <CC language="javascript" code="myList.push()" /> and
  <CC language="javascript" code="myList.pop()" /> member functions.
</p>

<p>
  Objects contain properties, i.e., key-value pairs. We typically use them to
  represent a data table's row in this course. To construct an object, you can
  specify the key and value explicitly:
</p>

<Code
  language="javascript"
  code={`const student = { name: 'J. Doe', number: 243901};
// Two ways to access the properties:
console.log(student.name);
console.log(student['number']);
// Add properties by assigning to them
student.curriculum = 'Statistics';`}
/>

<p>
  <a
    target="_blank"
    rel="noreferrer"
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    >Object destructuring</a
  > provides another syntax to construct and retrieve values from an object. In this
  variant, the names of the variables are used as keys:
</p>

<Code
  language="javascript"
  code={`const name = 'J. Doe';
const number = 243901;
const student = { name, number };`}
/>

<p>Extracting specific properties from an object works very similar:</p>

<Code language="javascript" code={`const { name } = student;`} />

<p>
  An important thing to realize is, although these variables were defined with
  <CC language="javascript" code="const" />, it is possible to change values
  within the list or properties of the object. There is a fundamental difference
  in changing a list's or object's content and assigning a different list or
  object to a variable! So, updating values is allowed:
</p>

<Code
  language="javascript"
  code={`myList[4] = 4;
student.name = 'M. Doe';`}
/>

<p>
  But assigning different lists or objects is not when the variable is constant!
</p>

<Code
  language="javascript"
  code={`myList = ['a', 'new', 'list'];
student = {name: 'Not Allowed'};`}
/>

<p>
  Note that primitive types, such as numbers, are their content. So, you can not
  change the value of a constant variable that contains a number, but you can
  change the content of a list in a constant variable!
</p>

<hr />

<p>
  Create an object containing your name and a list of your favourite things.
  Show and fill in this message <i
    >"My name is ... and these are some of my favourite things: ... ."</i
  >
  in a paragraph. <i>Hint: the list does not have to look good yet.</i>
</p>

<h5>Output</h5>

<div class="output">
  <Exercise />
</div>

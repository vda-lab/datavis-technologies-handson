<script>
  import CC from "$lib/ui/CodeInline.svelte";
</script>

<h1>Instructions</h1>
<h2 id="initial_setup">Initial Setup</h2>
<p>
  You'll have to create an account on github (<a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="http://github.com">http://github.com</a
  >) first. This will make it easier to get everything organised.
</p>

<p>
  We have prepared a project on github so that the right structures are set up
  and the necessary boilerplate code is ready to go. To get set up:
</p>

<h3>On github</h3>
<ul>
  <li>Log into github</li>
  <li>
    Go to <a
      target="_blank"
      rel="noreferrer"
      class="link-primary"
      href="http://github.com/vda-lab/datavis-technologies-handson"
      >http://github.com/vda-lab/datavis-technologies-handson</a
    >
  </li>
  <li>Click on "Fork"</li>
</ul>

<h3>On stackblitz</h3>
<ul>
  <li>Log in using your github account</li>
  <li>
    Click on "repositories" in the left and then on the
    "datavis-technologies-handson"
  </li>
</ul>

<p>
  We won't go into running a sveltekit application locally, as is covered by the
  stackblitz system. If you would like to try it, however, you can find the
  necessary information on the sveltekit website at http://kit.svelte.dev.
</p>

<h2 id="directory_structure">Directory structure</h2>
<p>
  The actual svelte sketches are located under the <CC code="/src/routes" />
  directory. This structure is mandatory, and should <emph>not</emph> be
  changed. The <CC code="/src/routes" /> directly maps to the URL structure: any
  subdirectory will be accessible from your web browser.
</p>

<p>
  For example, <CC code="/src/routes/01_web_technologies/exercise_01" /> maps to
  <CC code="http://some_ip/01_web_technologies/exercise_01" />.
</p>

<p>
  The actual <emph>page</emph> you get to see at that URL gets its contents from
  the file named <CC code="+page.svelte" /> in that particular directory. Note that
  the file <b>must</b> be named <CC code="+page.svelte" />.
</p>

<p>
  <b>IMPORTANT</b>: You will actually <b>not</b> be changing the
  <CC code="+page.svelte" />
  files, but the<CC code="Exercise.svelte" /> files in these subdirectories.
</p>

<h2 id="working_on_exercise">Working on the Exercises</h2>
<p>
  When you open the repository on stackblitz, it will compile the code and start
  a webserver (probably on port 5173, but this might vary.)
</p>

<p>
  <b>IMPORTANT</b> - You might get an error referring to <code>src/lib/highlight.js</code>.
  This is an issue with stackblitz: it wants to start the application before it has 
  finished loading all dependencies. If that happens:
</p>
<ol>
<li>Click within the terminal that displays the error message.</li>
<li>Press Control-C to stop the process.</li>
<li>Type <code>npm run build</code>.</li>
<li>Type <code>npm run dev</code>.</li>
</ol>

<p>
  You'll see output generated similar to that below, and be ready to go.
</p>

<pre>❯ npm install && npm run dev
warn preInstall No description field
warn preInstall No repository field
warn preInstall No license field
┌ [1/4] 🔍  Resolving dependencies
└ Completed in 0.043s
┌ [2/4] 🚚  Fetching dependencies
│ info pruneDeps Excluding 14 dependencies. For more information use `--verbose`.
└ Completed in 2.553s
┌ [3/4] 🔗  Linking dependencies
└ Completed in 0.135s
info security We found `install` scripts which turbo skips for security reasons. For more information see
https://turbo.sh/install-scripts.
├─ @sveltejs/kit@1.7.2
└─ esbuild@0.16.17
info Some packages were automatically replaced with polyfills. For more information see https://turbo.sh/polyfills.
└─ esbuild@0.16.17 => esbuild-wasm@0.16.17

success Saved lockfile "package-lock.json"
success Updated "package.json"

success Install finished in 2.744s
$ vite dev

Forced re-optimization of dependencies

  VITE v4.1.2  ready in 1269 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
[
  '',
  '/01_instructions',
  '/02_exercises',
  '/02_exercises/01_web_technologies',
  '/02_exercises/01_web_technologies/exercise_01',
  '/02_exercises/01_web_technologies/exercise_02',
  ...
  '/02_exercises/03_interactivity/exercise_04'
]
9:56:22 AM [vite-plugin-svelte] ssr compile done.
package                         files     time    avg
datavis-technologies-handson        3   28.7ms  9.6ms</pre>

<p>
  Notice the line saying <CC code="Local: http://localhost:5173/" />: it tells
  you the port to connect to. You might see a button to open a preview, or have
  to open a new browser tab on that particular port yourself.
</p>

<p>
  As you go through the contents of that webpage, switch back to stackblitz to
  edit the <CC code="Exercise.svelte" /> file for each exercise.
</p>

<!-- Navigation added by layout -->

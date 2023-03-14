<script>
  import CC from "$lib/ui/CodeInline.svelte";
</script>

<h1>Instructions</h1>
This document explains how to get started with the exercises on this website.

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
  <li>Connect your GitHub account.</li>
  <li>
    Go to the <a
      target="_blank"
      rel="noreferrer"
      class="link-primary"
      href="https://stackblitz.com/codeflow">https://stackblitz.com/codeflow</a
    > and click on "Join the Codeflow Beta"
  </li>
  <li>Go back to the main Stackblitz dashboard.</li>
  <li>
    Click on "repositories" in the left side-bar and then on the
    "datavis-technologies-handson"
  </li>
</ul>

<p>
  We won't go into running a sveltekit application locally, as is covered by the
  stackblitz system. If you would like to try it, however, you can find the
  necessary information on the sveltekit website at <a
    target="_blank"
    rel="noreferrer"
    class="link-primary"
    href="http://kit.svelte.dev">http://kit.svelte.dev</a
  >.
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
  <b>IMPORTANT</b> - If you get an error referring to
  <code>src/lib/highlight.js</code>. Then you are not using Codeflow in
  Stackblitz, go back to the initial setup to join the Codeflow beta.
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
  Notice the line saying <CC code="➜  Local: http://localhost:5173/" />: it
  tells you the port to connect to. Clicking on that link while holding the
  <CC code="Ctrl" /> keyboard button opens a preview page. You might also see a button
  to open a preview in a notifications towards to lower right of the screen.
</p>

<p>
  As you go through the contents of that webpage, switch back to stackblitz to
  edit the <CC code="Exercise.svelte" /> files for each exercise.
</p>

<h2 id="directory_structure">Committing your work</h2>

Before you close stackblitz, you have to save yourwork. To do that, click the
source control button in the left side bar (the one below the search icon).
Within that menu, you will see a tab labelled "SOURCE CONTROL". Within that tab
files with changes are grouped together under a header "Changes". When you hover
over that header, a "+" appears. Click that "+" to stage all changes. Then, fill
in a message in the message block and click the "Commit & Push" button to save
your work.

<!-- Navigation added by layout -->

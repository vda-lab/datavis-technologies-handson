# Datavis technologies handson

**READ THIS DOCUMENT FIRST - TO THE BOTTOM**

We have set up a group of exercises that will guide you through the different facets of creating visualisations using web technologies and sveltekit. Below are the instructions on how to get these.

The general material presented in the course (http://vda-lab.github.io/datavis-technologies) is based on svelte, whereas the exercises are created in sveltekit. Svelte is a language and compiler for building web applications. It allows you to create reusable components. SvelteKit is a full-stack web application framework built on top of Svelte.

In the exercise material (see below), we explain the structure of a sveltekit application; it is not relevant here though.

## Setting things up
You’ll have to create an account on github (http://github.com) first. This will make it easier to get everything organised.

We have prepared a project on github so that the right structures are set up and the necessary boilerplate code is ready to go. To get set up:

### On github
* Log into github
* Go to http://github.com/vda-lab/datavis-technologies-handson
* Click on "Fork"

### On stackblitz
* Log in using your github account
* Click on "repositories" in the left and then on the "datavis-technologies-handson"

## Sveltekit vs Svelte
We won't go into running a sveltekit application locally, as is covered by the stackblitz system. If you would like to try it, however, you can find the necessary information on the sveltekit website at http://kit.svelte.dev.

### Directory structure
The actual svelte sketches are located under the `src/routes` directory. This structure is mandatory, and should *not* be changed. The `src/routes` directly maps to the URL structure: any subdirectory will be accessible from your webbrowser.

For example, `src/routes/01_web_technologies/ex_1/` maps to `http://some_ip/01_web_technologies/ex_1`.

The actual *page* you get to see at that URL gets its contents from the file named `+page.svelte` in that particular directory. Note that the file **must** be named `+page.svelte`.

**IMPORTANT**: You will actually **not** be changing the `+page.svelte` files, but the `Exercise.svelte` files in these subdirectories.

## Instructions
When you open the repository on stackblitz, it will compile the code and start a webserver (probably on port 5173, but this might vary.)

```
❯ npm install && npm run dev
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
datavis-technologies-handson        3   28.7ms  9.6ms
```

Notice the line saying `Local: http://localhost:5173/`: it tells you the port to connect to. You might see a button to open a preview, or have to open a new browser tab on that particular port yourself.

As you go through the contents of that webpage, switch back to stackblitz to edit the `Exercise.svelte` file for each exercise.
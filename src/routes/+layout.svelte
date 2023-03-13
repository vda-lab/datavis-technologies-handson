<script>
  import { page } from "$app/stores";
  import "../app.css";

  export let data;
  const { navigation, hierarchy } = data;
  $: url = $page.url.pathname;
  $: prev = navigation[url]?.prev;
  $: up = navigation[url]?.up;
  $: next = navigation[url]?.next;
  $: children =
    url === "/"
      ? hierarchy
      : url
          .split("/")
          .splice(1)
          .reduce((agg, f) => agg[f], hierarchy);
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">
    Data visualisation technologies - hands on
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon" />
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      {#each Object.values(hierarchy).slice(2) as page}
        <a
          class="nav-item nav-link"
          class:active={url.includes(page.url)}
          href={page.url}
        >
          {page.name}
        </a>
      {/each}
    </div>
  </div>
</nav>

<div class="container-fluid">
  <slot />

  <!-- Contents -->
  {#if Object.values(children).length > 2}
    <ol>
      {#each Object.values(children).splice(2) as page}
        <li><a href={page.url}>{page.name}</a></li>
      {/each}
    </ol>
  {/if}

  <!-- Navigation -->
  <hr />
  <div class="d-flex justify-content-between">
    <a
      type="button"
      class="btn btn-light"
      class:disabled={!prev}
      href={prev ? prev.url : "/"}
    >
      ← {prev ? prev.name : ""}
    </a>
    <a
      type="button"
      class="btn btn-light"
      class:disabled={!up || (prev && up.name == prev.name)}
      href={up && (!prev || up.name != prev.name) ? up.url : "/"}
    >
      ↑ {up && (!prev || up.name != prev.name) ? up.name : ""}
    </a>
    <a
      type="button"
      class="btn btn-light"
      class:disabled={!next}
      href={next ? next.url : "/"}
    >
      {next ? next.name : ""} →
    </a>
  </div>
</div>

<footer class="text-lg-start bg-light text-muted fixed-bottom">
  (c) 2023 - Jelmer Bot, Jannes Peeters & Jan Aerts.
</footer>

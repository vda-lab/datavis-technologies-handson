<script>
export let data;

const editUrl = (url) => {
    return url.replace("/src/routes/","").replace("+page.svelte","")
}
</script>

<h2>Exercises</h2>
<ul>
{#each data.pages as [page, module]}
  <!-- <h2>{page}</h2> -->
  <li><a href={editUrl(page)}>{editUrl(page).replace("exercises/","")}</a></li>
{/each}
</ul>
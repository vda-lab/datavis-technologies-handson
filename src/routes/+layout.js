// Provide page-list on load
export const load = async () => {
  return {
    navigation,
    hierarchy,
  };
};

// --- Helpers

// List pages on website
const pages = Object.keys(import.meta.glob("/src/routes/**/+page.svelte"))
  // Strip `/src/routes` from begin and `/+page.svelte` from end
  .map((page) => page.replace("/src/routes", "").replace("/+page.svelte", ""));

console.log(pages)

// Convert into hierarchy { folder: {name, url, sub_folder: {...}}, ...}
const hierarchy = pages.reduce(
  (agg, page) => {
    const folders = page.split("/");
    folders.splice(1).reduce((sub_agg, folder) => {
      if (!(folder in sub_agg)) {
        sub_agg[folder] = {
          name: folder
            .replace(/[0-9][0-9]_/, "")
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          url: page,
        };
      }
      // console.log(folder)
      return sub_agg[folder];
    }, agg);
    return agg;
  },
  {}
  // { name: "Home", url: "/" }
);

// Convert into { url: { next: {name, url}, prev: {name, url}} structure
const navigation = pages.reduce((agg, page, i, arr) => {
  agg[page ? page : "/"] = {
    up: page ? name_and_url(page.split("/").slice(0, -1).join("/")) : null,
    prev: i > 0 ? name_and_url(arr[i - 1]) : null,
    next: i < arr.length - 1 ? name_and_url(arr[i + 1]) : null,
  };
  return agg;
}, {});

// Extract display name and url from url
function name_and_url(url) {
  if (!url) {
    return { name: "Home", url: "/" };
  }
  const folders = url.split("/");
  const name = folders[folders.length - 1]
    .replace(/[0-9][0-9]_/, "")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return { name, url };
}

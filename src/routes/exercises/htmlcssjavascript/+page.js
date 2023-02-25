export const load = async () => {
    const remove_prefix = (url) => {
        return url.replace("/src/routes/","")
    }
    const remove_suffix = (url) => {
        return url.replace("+page.svelte","")
    }
    const get_exercise_group = (url) => {
        let trimmed_url = remove_suffix(remove_prefix(url))
        // console.log(trimmed_url)
        return trimmed_url.replace("exercises/","").replace(/\/exercise_.*/,"")
    }
    const get_exercise_name = (url) => {
        let trimmed_url = remove_suffix(remove_prefix(url))
        return trimmed_url.replace("exercises/","").replace(/.*\/exercise_/,"exercise_").replace(/\/$/,"")
    }
    const build_structure = (arr) => {
        let structure = []

        // Why can't we just go through the array once?!? Issues with hasOwnProperty or `in`: will reset every time
        arr.forEach((page) => {
            let url = page[0]
            let exercise_name = get_exercise_name(url)
            structure = [...structure, {"name": exercise_name, "url": url}]
        })
        return structure
    }

    const getPages = async () => {
        const pages = await Object.entries(import.meta.glob('./*/+page.svelte'))
        const results = await pages
        console.log(results)
        return build_structure(pages)
    }

    return {
        pages: getPages()
    }
}
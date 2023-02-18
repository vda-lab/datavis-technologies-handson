export const load = async () => {
    const getPages = async () => {
        const pages = await Object.entries(import.meta.glob('/src/routes/exercises/*/+page.svelte'))
        const results = await pages
        return pages
    }

    return {
        pages: getPages()
    }
}
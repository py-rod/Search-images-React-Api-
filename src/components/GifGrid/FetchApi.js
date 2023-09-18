
export const getGifs = async (category) => {
    const apiKey = "DwFvfQalPVZLWiQ8BEshuIGryaSOZZc3"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${category}`

    const response = await fetch(url)
    const { data } = await response.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        image: img.images.original.url,
    }))
    return gifs
}

import { useState, useEffect } from "react";
import { getGifs } from "../FetchApi";

export const UseFetchGif = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const saveImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        saveImages();
    }, [])

    return {
        images,
        isLoading
    }
}
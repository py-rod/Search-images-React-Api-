import "./GifGrid.css"
import { UseFetchGif } from "./hooks/UseFetchGif"

export const GrifGrid = ({ category }) => {

    const { images, isLoading } = UseFetchGif(category);

    return (
        <>
            <section>
                <h1>{category}</h1>
                {
                    isLoading
                        ? <h2>Cargando...</h2>
                        : null
                }
                <ul className="container-imgs">
                    {images.map(img => {
                        return (
                            <li key={img.id}>
                                <img src={img.image} alt="" />
                                <h2>{img.title}</h2>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}
import React from "react"
import { Helmet } from "react-helmet";
import PhotoGallery from "../../PhotoGallery/index.jsx";

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Фотогалерея</title>
            </Helmet>
            <PhotoGallery />
        </>
    )
}
export default GalleryPage
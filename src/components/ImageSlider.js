import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import React, { useState } from "react";
import "../css/imageslider.css";

const ImageSlider = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null); // State for the enlarged image

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

   
    const handleImageClick = (image) => {
        setSelectedImage(image); 
    };

    
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="imagegallery">
            <div className="tag">
                <h2>Image Gallery</h2>
            </div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id} onClick={() => handleImageClick(item)}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>

          
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="enlarged-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardOne from "../Card/CardOne";
import './sliderOne.scss'


const SliderOne = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider" >
            <div className="container">
                <Slider  {...settings}>

                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />

                </Slider>

            </div>
        </div>
    )
}

export default SliderOne
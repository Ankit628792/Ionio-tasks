import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slide from './Slide';

function CarouselBG() {
    const numList = [0,1,2,3];
    const type = ['olympic', 'experimental', 'city', 'spirituality']
    const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas quam, cum eligendi.`
    return (
        <>
            <Carousel
                className="carousel"
                autoPlay="true"
                swipeable={true}
                swipeScrollTolerance={1}
                showThumbs={false}
                showIndicators={true}
                showStatus={false}
            >
                {
                    numList.map((_, i) => (
                        <Slide key={i} imgSrc={`https://source.unsplash.com/1600x900?${type[i]}`} text={lorem} />
                    ))
                }
            </Carousel>

        </>
    )
}

export default CarouselBG

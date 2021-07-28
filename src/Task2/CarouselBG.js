import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselBG() {
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
                <div>
                    <img src="https://source.unsplash.com/1600x900/?nature" alt=" " />
                    <p className="content line-clamp-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui eos laborum consectetur, porro earum debitis. Quod hic dolor quo.
                    </p>
                </div>
                <div>
                    <img src="https://source.unsplash.com/1600x1000/?sports" alt=" " />
                    <p className="content line-clamp-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui eos laborum consectetur, porro earum debitis. Quod hic dolor quo.
                    </p>
                </div>
                <div>
                    <img src="https://source.unsplash.com/1600x800/?city" alt=" " />
                    <p className="content line-clamp-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui eos laborum consectetur, porro earum debitis. Quod hic dolor quo.
                    </p>
                </div>
            </Carousel>

        </>
    )
}

export default CarouselBG

import React from 'react';
import { Carousel } from 'react-bootstrap';

const Sliders = () => {

    return (
        <Carousel className="mb-4">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/S6FF8pF/slider-1.jpg"
                    alt="First slide"
                    height="400px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/dbGcyhb/slider-3.jpg"
                    alt="Second slide"
                    height="400px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="    https://i.ibb.co/1rxdRjP/slider-2.jpg"
                    alt="Third slide"
                    height="400px"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Sliders;
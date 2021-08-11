import { React, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import boys_cool from '../images/boys_cool.jpg';
import headshot_light from '../images/headshot_light.jpg';
import honeymoon from '../images/honeymoon.jpg';


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ boys_cool }
                alt="My Boys: Silas (9) and Jude (7)"
                />
            <Carousel.Caption>
                <h3>My Boys: Silas (9) and Jude (7)</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ honeymoon }
                alt="Husband: Dan in Banff"
            />

            <Carousel.Caption>
                <h3>Husband: Dan, in Banff</h3>
                
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ headshot_light }
                alt="My head in black and white"
            />
            </Carousel.Item>
        </Carousel>
    );
    }


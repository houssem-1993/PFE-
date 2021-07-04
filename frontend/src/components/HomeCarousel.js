import React from "react";

import { Carousel } from 'react-bootstrap';

class HomeCarousel extends React.Component {

    render() {
        
        return (
            <div>
                <div className='container-fluid' style={{paddingLeft:'6vw'}} >
                    <div className="row">
                        <div className="col-11">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.kobejet.com/sites/default/files/styles/colorbox_orientation/public/2017-11/envelopes.png.jpeg?itok=7KLecFYR"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.paysdesenveloppes.fr/serverspecific/default/modules/webshop_light/product_images/26075-enveloppes-bulles-kraft-marron-80-grs..jpg"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Enveloppe en papier craft</h3>
                                        <p>ces enveloppes sont disponible dans des différentes tailles.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.paysdesenveloppes.fr/serverspecific/default/modules/webshop_light/product_images/4975-enveloppes-papier-verg.jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

    export default HomeCarousel
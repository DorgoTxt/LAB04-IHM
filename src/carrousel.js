import Carousel from 'react-bootstrap/Carousel';

const Carrouselfotos = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src='https://e.rpp-noticias.io/xlarge/2023/03/28/240824_1407903.jpg' alt='First slide' className='img-fluid' />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://f.rpp-noticias.io/2023/03/28/1407901103510-1322132jpg.jpg' alt='Second slide' className='img-fluid' />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://f.rpp-noticias.io/2023/03/28/1407902364236-1385461jpg.jpg' alt='Third slide' className='img-fluid' />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrouselfotos;
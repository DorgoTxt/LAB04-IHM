import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Portada from './data/portada';

const feather = require("feather-icons");

setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }
    return (
        <main>
            <h2>COTIZA TU PC YA!!!</h2>
            <p>En esta sección podrás cotizar tu PC, seleccionando los componentes que desees.</p>
            <Carousel>
                {
                    Portada.map(it => (
                        <Carousel.Item onClick={(e) => { e.preventDefault(); handleClick(it.slug) }}>
                            <img className="w-100 dark-image" src={it.url} alt={it.slug} />
                            <Carousel.Caption>
                                <h3>{it.slug}</h3>
                                <p>{it.content}</p>
                                <button className="btn btn-primary">Ver detalle</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </main>
    );
}

export default Main;

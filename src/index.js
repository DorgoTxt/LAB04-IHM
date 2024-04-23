import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import Message from "./message";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
import Carrosuel from "./carrousel";
import "./styles.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrouselfotos from "./carrousel";
const feather = require("feather-icons");

setTimeout(() => {
    feather.replace();
}, 1000);

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header></Header>

        <div className="container">
            <div className="row">
                <div className="col-md-8 py-4">
                    <div className="row">
                        <Main></Main>
                        <Carrouselfotos></Carrouselfotos>
                    </div>
                </div>
                <div className="col-md-4 py-5">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
);
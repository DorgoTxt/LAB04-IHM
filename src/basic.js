import { StrictMode } from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import Aside from "./aside";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Header></Header>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 py-4">
                            <div className="row">
                                <h1>ESTO ES BASIC</h1>
                                <Main></Main>
                            </div>
                        </div>
                        <div className="col-md-4 py-5">
                            <Aside></Aside>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </StrictMode>
        </>
    );
}

export default Basic;
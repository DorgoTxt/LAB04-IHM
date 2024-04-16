import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import Message from "./message";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Message message="Hola 1" />
        <Message message="Hola 2" />
        <Message message="Hola 3" />
    </StrictMode>
);
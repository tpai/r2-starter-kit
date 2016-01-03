import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import Store from "./src/store/Store";
import "./src/styles/header.scss";

const store = Store ();

render(
    <Provider store={store}>
        <div>
            <AppRouter />
        </div>
    </Provider>,
    document.getElementById("react")
);

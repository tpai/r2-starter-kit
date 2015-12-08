import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { syncReduxAndRouter } from "redux-simple-router";
import createBrowserHistory from "history/lib/createBrowserHistory";
import AppRouter from "./AppRouter";
import Store from "./src/store/Store";
import "./src/styles/header.scss";

const store = Store ();
const history = createBrowserHistory();

syncReduxAndRouter(history, store);

let tools;
if((__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__)) {
    const DevTools = require('./src/store/DevTools');
    tools = (<DevTools />);
}

render(
    <Provider store={store}>
        <div>
            <AppRouter history={history} />
            {tools}
        </div>
    </Provider>,
    document.getElementById("react")
);

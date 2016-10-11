/* global location */

import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Grid, Col, Breadcrumb } from "amazeui-react";

function App( { children } ) {
    return (
        <Grid className="doc-g">
            <Col
              md={ 8 } mdCentered
              lg={ 6 } lgCentered
            >
                <Breadcrumb>
                    <Breadcrumb.Item
                      active
                      linkComponent={ Link }
                      linkProps={ { to: "/" } }
                    >Home
                    </Breadcrumb.Item>
                    { location.pathname.match( /posts\/[0-9]{1,}/ ) != null &&
                    <Breadcrumb.Item active>Article</Breadcrumb.Item> }
                </Breadcrumb>
                {children}
            </Col>
        </Grid>
    );
}

App.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default App;

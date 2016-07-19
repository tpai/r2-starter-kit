import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Col, Breadcrumb } from 'amazeui-react';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };
    render() {
        const {
            location,
            children
        } = this.props;
        return (
            <Grid className="doc-g">
                <Col
                    md={8} mdCentered
                    lg={6} lgCentered>
                    <Breadcrumb>
                        <Breadcrumb.Item
                            active
                            linkComponent={Link}
                            linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
                        { location.pathname.match(/posts\/[0-9]{1,}/) != null &&
                        <Breadcrumb.Item active>Article</Breadcrumb.Item> }
                    </Breadcrumb>
                    {children}
                </Col>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        pagination: state.pagination
    }
}

export default connect(mapStateToProps)(App);

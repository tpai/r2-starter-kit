import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Col } from 'amazeui-react';

class App extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.object.isRequired
    };
    render() {
        const {
            title,
            children
        } = this.props;
        return (
            <Grid className="doc-g">
                <Col lg={12} lgCentered>
                    <h1 style={{ textAlign: 'center' }}>{title}</h1>
                    {children}
                </Col>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.navTitle
    }
}

export default connect(mapStateToProps)(App);

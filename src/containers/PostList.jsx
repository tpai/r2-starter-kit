import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import { getList } from "redux/modules/list";

import TitleList from "components/TitleList";

export class PostList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getList());
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                <h1>Post List</h1>
                <TitleList list={this.props.list} />
            </div>
        );
    }
    static propTypes = {
        list: PropTypes.array.isRequired
    };
}

export const mapStateToProps = state => {
    return {
        list: state.list
    };
};

export default connect(mapStateToProps)(PostList);

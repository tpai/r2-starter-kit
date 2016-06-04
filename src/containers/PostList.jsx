import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import { getList } from "redux/modules/list";

import * as style from "styles/postList";

import TitleList from "components/TitleList";

export class PostList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getList());
    }
    render() {
        const { title } = style;
        const { list } = this.props;
        return (
            <div>
                <h1 className={title}>Post List</h1>
                <TitleList list={list} />
            </div>
        );
    }
    static propTypes = {
        list: PropTypes.array.isRequired
    };
}

export const mapStateToProps = state => { return { list: state.list } };

export default connect(mapStateToProps)(PostList);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import List from 'components/List';

function PostList({ list }) {
    return <List title="Article List" list={list} />;
}

PostList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
    return { list: state.list };
}

export default connect(mapStateToProps)(PostList);

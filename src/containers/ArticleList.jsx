import React, { PropTypes } from "react";
import { connect } from "react-redux";

import List from "components/List";

export function PostList( { list } ) {
    return (
        <List
          title="Article List"
          list={ list }
        />
    );
}

PostList.propTypes = {
    list: PropTypes.shapeOf().isRequired,
};

export function mapStateToProps( state ) { return { list: state.list }; }

export default connect( mapStateToProps )( PostList );

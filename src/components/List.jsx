import React, { PropTypes } from 'react';

export default function List({ title, list }) {
}

List.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import React, { PropTypes } from 'react';

export default function Content({ post }) {
    const { title, author, body } = post;
    return (
    );
}

Content.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }),
};

import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from 'components/Breadcrumb';

export default function Content({ title, author, body }) {
    return (
        <div>
            <Breadcrumb data={[
                { text: 'List', link: '/' },
                { text: 'Content' }
            ]} />
            <div className="ts card text container">
                <div className="image">
                    <img src={`https://lorempixel.com/1200/720`} />
                </div>
                <div className="content">
                    <div className="header">
                        {title}
                    </div>
                    <div className="bulleted meta">
                        {`${author.name} (${author.email})`}
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
            </div>
        </div>
    );
}

Content.defaultProps = {
    title: 'Title',
    author: { name: 'Author', email: 'Email' },
    body: 'Content'
};

Content.propTypes = {
    title: PropTypes.string,
    author: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string
    }),
    body: PropTypes.string
};

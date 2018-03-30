import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FadeOutImage from 'components/FadeOutImage';

export default function List({ data }) {
    return (
        <div className="ts divided items">
            { data.map((val, key) => {
                return (
                    <div key={`item${key}`} className="item">
                        <div className="image">
                          <FadeOutImage url={val.imgUrl} placeholder={val.imgPlaceholder} />
                        </div>
                        <div className="content">
                            <Link to={val.link} className="header">{val.title}</Link>
                            <div className="description">
                                {val.desc}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

List.defaultProps = {
    data: [{
        id: 0,
        title: 'Title',
        link: '#',
        desc: 'Content',
        imgUrl: 'https://picsum.photos/320/180?image=0',
        imgPlaceholder: 'https://picsum.photos/32/18?image=0',
    }]
};

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
        desc: PropTypes.string,
        imgUrl: PropTypes.string,
        imgPlaceholder: PropTypes.string,
    }))
};

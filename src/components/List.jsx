import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function List({ data }) {
    return (
        <div className="ts divided items">
            { data.map((val, key) => {
                return (
                    <div key={`item${key}`} className="item">
                        <div className="image">
                            <img src={val.img} />
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
        img: 'http://placehold.it/320x180',
    }]
};

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        link: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string
    }))
};

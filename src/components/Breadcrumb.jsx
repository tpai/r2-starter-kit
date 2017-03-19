import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ data }) {
    return (
        <div className="ts breadcrumb">
            {data.map((val, key) => {
                const lastOne = key === data.length - 1;
                return (
                    <div key={`crumb${key}`} className={`${lastOne ? 'active' : ''} section`}>
                        {val.link
                            ? <Link to={val.link}>{val.text}</Link>
                            : val.text
                        }
                        {!lastOne && <i className="right angle icon divider"></i>}
                    </div>
                );
            })}
        </div>
    );
}

Breadcrumb.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string
    }))
};

export default Breadcrumb;

import React, { PropTypes } from 'react';
import { ListNews } from 'amazeui-react';

export default function List({ title, list }) {
    const data = {
        header: { title, link: '#' },
        main: list,
    };
    return <ListNews data={data} thumbPosition="left" />;
}

List.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

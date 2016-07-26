import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { ListNews, Image } from 'amazeui-react';

export default class List extends Component {
    static propTypes = {
        title: PropTypes.string,
        list: PropTypes.array.isRequired
    }
    render() {
        const {
            title,
            list
        } = this.props;
        const data = {
            header: {
                title,
                link: '#'
            },
            main: list
        };
        return (
            <ListNews data={data} thumbPosition="left" />
        );
    }
}

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { ListNews, Image } from 'amazeui-react';

export default class TitleList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    }
    render() {
        const { list } = this.props;
        const data = {
            header: {
                title: '',
                link: '#'
            },
            main: _.map(list, item => {
                return {
                    title: item.title,
                    link: `/posts/${item.id}`,
                    desc: item.body,
                    img: `http://lorempixel.com/320/180?t=${item.id}`
                };
            })
        };
        return (
            <ListNews data={data} thumbPosition="left" />
        );
    }
}

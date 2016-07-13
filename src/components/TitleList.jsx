import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'amazeui-react';

export default class TitleList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    }
    render() {
        const { list } = this.props;
        return (
            <List border>
            {
                _.map(list, item =>
                    <ListItem key={item.id} truncate>
                        <Link to={"/posts/" + item.id}>
                            {item.title}
                        </Link>
                    </ListItem>
                )
            }
            </List>
        );
    }
}

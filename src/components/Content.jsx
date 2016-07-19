import React, { Component, PropTypes } from 'react';
import { Panel, Article, Image } from 'amazeui-react';

export default class Content extends Component {
    static propTypes = {
        post: PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired
        })
    }
    render() {
        const { post } = this.props;
        return (
            <Panel>
                <Article
                    title={post.title}
                    meta={post.author}>
                    <img
                        src={`http://lorempixel.com/900/450?t=${post.title}`}
                        width="100%" />
                    {post.body}
                </Article>
            </Panel>
        )
    }
}

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
    componentDidUpdate() {
        this.refs.placeholder.src = `http://placehold.it/800x450`;
    }
    render() {
        const { post } = this.props;
        return (
            <Panel>
                <Article
                    title={post.title}
                    meta={post.author}>
                    <img
                        ref="placeholder"
                        src="#" />
                    <img
                        style={{ display: 'none' }}
                        src={`http://placehold.it/800x450?t=${post.title}`}
                        onLoad={() => {
                            this.refs.placeholder.src = `http://lorempixel.com/800/450?t=${post.title}`;
                        }} />
                    {post.body}
                </Article>
            </Panel>
        )
    }
}

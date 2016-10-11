import React, { PropTypes } from "react";
import { Panel, Article } from "amazeui-react";

export default function Content( { post } ) {
    const { title, author, body } = post;
    return (
        <Panel>
            <Article
              title={ title }
              meta={ author }
            >
                <div dangerouslySetInnerHTML={ { __html: body } } />
            </Article>
        </Panel>
    );
}

Content.propTypes = {
    post: PropTypes.shape( {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    } ),
};

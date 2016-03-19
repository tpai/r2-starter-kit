import expect from "expect";
import TestUtils from "react-addons-test-utils";

import React from "react";

import Container, { PostList } from "containers/PostList";

const renderWithProps = (props = {}) => {
    return TestUtils.renderIntoDocument(<PostList {...props} />);
}

describe("Containers::PostList", () => {
    let _rendered;
    const setup = props => {
        _rendered = renderWithProps(props);
    }

    let TitleList;
    beforeEach(() => {
        TitleList = React.createClass({
            render() {
                return (<div>MOCK COMPONENT</div>)
            }
        });
        Container.__Rewire__("TitleList", TitleList);
    })

    it ("#render()", () => {
        let fakeDispatch;
        setup ({
            list: [{ id: 1, title: "yo", body: "man" }],
            dispatch: fakeDispatch = expect.createSpy()
        });

        expect(fakeDispatch).toHaveBeenCalled();

        let header = TestUtils.findRenderedDOMComponentWithTag(_rendered, "h1");
        expect(header.textContent).toBe("Post List");

        let titleList = TestUtils.findRenderedComponentWithType(_rendered, TitleList);
        expect(titleList.props.list.length).toBe(1);
    })
})

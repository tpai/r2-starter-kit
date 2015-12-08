import expect from "expect";
import TestUtils from "react-addons-test-utils";

import React from "react";

import Container, { PostContent } from "src/containers/PostContent";

const renderWithProps = (props = {}) => {
    return TestUtils.renderIntoDocument(<PostContent {...props} />);
}

describe("Containers::PostContent", () => {
    let _rendered;
    const setup = props => {
        _rendered = renderWithProps(props);
    }

    let PrevNextButtons;
    beforeEach(() => {
        PrevNextButtons = React.createClass({
            render() {
                return (<div>MOCK COMPONENT</div>)
            }
        });
        Container.__Rewire__("PrevNextButtons", PrevNextButtons);
    })

    it ("#render()", () => {
        let fakeDispatch;
        setup ({
            post: { id: 1, title: "yo", body: "man" },
            params: { id: "1" },
            dispatch: fakeDispatch = expect.createSpy()
        });

        expect(fakeDispatch).toHaveBeenCalled();

        let btns = TestUtils.findRenderedComponentWithType(_rendered, PrevNextButtons);
        expect(btns).toExist();
        expect(btns.props.postId).toBe(1);

        let title = TestUtils.findRenderedDOMComponentWithTag(_rendered, "h1");
        expect(title.textContent).toBe("yo");

        let content = TestUtils.findRenderedDOMComponentWithTag(_rendered, "p");
        expect(content.textContent).toBe("man");
    })
})

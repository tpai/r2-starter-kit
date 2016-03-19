import expect from "expect";
import TestUtils from "react-addons-test-utils";

import React from "react";

import Container, { PostContent } from "containers/PostContent";

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
            routeParams: { id: 1 },
            dispatch: fakeDispatch = expect.createSpy()
        });

        expect(fakeDispatch).toHaveBeenCalled();

        let btns = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, "button");
        expect(btns.length).toBe(3);

        let title = TestUtils.findRenderedDOMComponentWithTag(_rendered, "h1");
        expect(title.textContent).toBe("yo");

        let content = TestUtils.findRenderedDOMComponentWithTag(_rendered, "p");
        expect(content.textContent).toBe("man");
    })
})

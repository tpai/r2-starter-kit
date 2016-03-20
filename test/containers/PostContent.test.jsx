import React from "react";
import expect from "expect";
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from "react-addons-test-utils";

import Container, { PostContent } from "containers/PostContent";

const renderWithProps = (props = {}) => {
    return TestUtils.renderIntoDocument(<PostContent {...props} />);
}

describe("Containers::PostContent", () => {
    let _rendered;
    const setup = props => {
        _rendered = renderWithProps(props);
    }

    const fakeDispatch = expect.createSpy();
    const fakeContext = { router: expect.createSpy() };

    it ("#render()", () => {
        setup ({
            post: { id: 1, title: "yo", body: "man" },
            routeParams: { id: 1 },
            dispatch: fakeDispatch
        });

        expect(fakeDispatch).toHaveBeenCalled();

        let title = TestUtils.findRenderedDOMComponentWithTag(_rendered, "h1");
        expect(title.textContent).toBe("yo");

        let content = TestUtils.findRenderedDOMComponentWithTag(_rendered, "p");
        expect(content.textContent).toBe("man");

        let btns = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, "button");
        expect(btns.length).toBe(3);
    })

    it ("disable prev button when id equals 1", () => {
        setup ({
            post: { id: 1, title: "yo", body: "man" },
            routeParams: { id: 1 },
            dispatch: fakeDispatch
        });

        let btns = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, "button");

        const prevBtn = btns[1];
        const nextBtn = btns[2];

        expect(prevBtn.disabled).toBe(true);
        expect(nextBtn.disabled).toBe(false);
    })

    it ("disable next button when id equals 100", () => {
        setup ({
            post: { id: 100, title: "no", body: "dude" },
            routeParams: { id: 100 },
            dispatch: fakeDispatch
        });

        let btns = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, "button");

        const prevBtn = btns[1];
        const nextBtn = btns[2];

        expect(prevBtn.disabled).toBe(false);
        expect(nextBtn.disabled).toBe(true);
    })

})

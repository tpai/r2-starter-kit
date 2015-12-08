import expect from "expect";
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from "react-addons-test-utils";

import React from "react";

import { PrevNextButtons } from "src/components/PrevNextButtons";

const shallowRender = component => {
    const renderer = TestUtils.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}

const shallowRenderWithProps = (props = {}) => {
    return shallowRender(<PrevNextButtons {...props} />);
}

describe("Components::PrevNextButtons", () => {
    let _props, _component;
    const setup = props => {
        _props = props;
        _component = shallowRenderWithProps(_props);
    }

    it("#render()", () => {
        let fakeDispatch;

        setup({
            postId: 1,
            dispatch: fakeDispatch = expect.createSpy()
        });

        let [ prevBtn, space, nextBtn ] = _component.props.children;

        expect(prevBtn).toEqualJSX(
            <button disabled={true} onClick={fakeDispatch}>
                Prev
            </button>
        );

        expect(nextBtn).toEqualJSX(
            <button disabled={false} onClick={fakeDispatch}>
                Next
            </button>
        );

        setup({
            postId: 100,
            dispatch: fakeDispatch = expect.createSpy()
        });

        [ prevBtn, space, nextBtn ] = _component.props.children;

        expect(prevBtn).toEqualJSX(
            <button disabled={false} onClick={fakeDispatch}>
                Prev
            </button>
        );

        expect(nextBtn).toEqualJSX(
            <button disabled={true} onClick={fakeDispatch}>
                Next
            </button>
        );


    })
})

import expect from "expect";
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from "react-addons-test-utils";

import React from "react";
import { Link } from "react-router";
import _ from "lodash";

import TitleList from "components/TitleList";

const shallowRender = component => {
    const renderer = TestUtils.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}

const shallowRenderWithProps = (props = {}) => {
    return shallowRender(<TitleList {...props} />);
}

describe("Components::TitleList", () => {
    let _props, _component;
    const setup = props => {
        _props = props;
        _component = shallowRenderWithProps(_props);
    }

    it("#render()", () => {

        setup({ list: [] });

        expect(_component).toEqualJSX(<ul />);

        setup({ list: [{ id: 1, title: "yo" }] });

        expect(_component).toEqualJSX(
            <ul>
                <li>
                    <Link to="/post/1">yo</Link>
                </li>
            </ul>
        );
    })
})

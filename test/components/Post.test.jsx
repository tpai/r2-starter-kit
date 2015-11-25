import expect from "expect";
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import { Link } from "react-router";
import { bindActionCreators } from "redux";

import { Post } from "src/components/Post";

const shallowRender = component => {
	const renderer = TestUtils.createRenderer();
	renderer.render(component);
	return renderer.getRenderOutput();
}

const shallowRenderWithProps = (props = {}) => {
	return shallowRender(<Post {...props} />);
}

const renderWithProps = (props = {}) => {
	return TestUtils.renderIntoDocument(<Post {...props} />);
}

describe("Components::Post", () => {
	
	let _spies, _props, _component, _rendered;
	
	const setup = () => {
		_spies = {};
		_props = {
			post: { title: "yo", body: "man" },
			params: { id: "1" },
			dispatch: _spies.dispatch = expect.createSpy()
		};
		_component = shallowRenderWithProps(_props);
		_rendered = renderWithProps(_props);
	}
	setup ();
	
	it ("#render()", () => {
		
		let [ prev, space, next, h1, p ] = _component.props.children;
		
		expect(_component.type).toBe("div")
		
		expect(prev.type).toBe("button");
		expect(prev.props.children).toBe("Prev");
		
		expect(next.type).toBe("button");
		expect(next.props.children).toBe("Next");
		
		expect(h1.type).toBe("h1");
		expect(h1.props.children).toBe("yo");
		
		expect(p.type).toBe("p");
		expect(p.props.children).toBe("man");
	})

	// it ("#click()", () => {
		
	// 	const btns = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, "button");
		
	// 	expect(_spies.dispatch).toNotHaveBeenCalled();
	// 	TestUtils.Simulate.click(btns[0]);
	// 	expect(_spies.dispatch).toHaveBeenCalled();
	// })
})
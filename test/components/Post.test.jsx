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
	
	let _props, _component, _rendered;
	
	const setup = (props) => {
		_props = props;
		_component = shallowRenderWithProps(_props);
		_rendered = renderWithProps(_props);
	}
	
	it ("#render()", () => {
		
		setup ({
			post: { id: 1, title: "yo", body: "man" },
			params: { id: "1" },
			dispatch: expect.createSpy()
		});
		
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
	
	it ("<button disabled={} />", () => {
		
		setup ({
			post: { id: 1, title: "yo", body: "man" },
			params: { id: "1" },
			dispatch: expect.createSpy()
		});
		
		let btns = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, "button");
		expect(btns[0].disabled).toBe(true);
		
		setup ({
			post: { id: 100, title: "hey", body: "dude" },
			params: { id: "100" },
			dispatch: expect.createSpy()
		});
		
		btns = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, "button");
		expect(btns[1].disabled).toBe(true);
	})
})
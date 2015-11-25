import expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import { Link } from "react-router";

import { Post } from "src/components/Post";

const setup = () => {
	let props = {
		post: { title: "yo", body: "man" }
	};
	let renderer = TestUtils.createRenderer();
	renderer.render(<Post {...props} />);
	let output = renderer.getRenderOutput();
	
	return {
		output,
		renderer
	}
}

describe("Components::Post", () => {
	it ("#render()", () => {
		const { output } = setup();
		
		expect(output.type).toBe("div")
		
		let [ prev, space, next, h1, p ] = output.props.children;
		
		expect(prev.type).toBe("button");
		expect(prev.props.children).toBe("Prev");
		
		expect(next.type).toBe("button");
		expect(next.props.children).toBe("Next");
		
		expect(h1.type).toBe("h1");
		expect(h1.props.children).toBe("yo");
		
		expect(p.type).toBe("p");
		expect(p.props.children).toBe("man");
	})	
})
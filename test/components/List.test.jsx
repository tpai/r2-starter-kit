import expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import { Link } from "react-router";

import { List } from "src/components/List";

const setup = () => {
	let props = {
		list: [{ userId: 1, id: 1, title: "yo", body: "man" }]
	};
	let renderer = TestUtils.createRenderer();
	renderer.render(<List {...props} />);
	let output = renderer.getRenderOutput();
	
	return {
		output,
		renderer
	}
}

describe("Components::List", () => {
	it ("#render()", () => {
		const { output } = setup();
		
		expect(output.type).toBe("div")
		
		let [ h1, ul ] = output.props.children;
		
		expect(h1.type).toBe("h1");
		expect(h1.props.children).toBe("Post List");
		
		expect(ul.type).toBe("ul");
		
		let li = ul.props.children;
		
		expect(li.length).toBe(1);
		expect(li[0].key).toBe("1");

		let link = li[0].props.children;
		
		expect(link.type).toBe(Link);
		expect(link.props.to).toBe("/post/1");
		expect(link.props.children).toBe("yo");
	})	
})
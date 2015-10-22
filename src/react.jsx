import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";

var Iamreact = React.createClass({
	getInitialState: function() {
		return {
			id: 0,
			title: "",
			body: ""
		};
	},
	componentDidMount: function() {
		var self = this;
		$.ajax({
			url: "http://jsonplaceholder.typicode.com/posts/1",
			method: "GET"
		})
		.fail(function(xhr) {
			console.log("FAILED", xhr);
		})
		.done(function(data) {
			self.setState({ id: data.id, title: data.title, body: data.body });
			console.log("DONE", data);
		})
		.always(function(data) {
			console.log("ALWAYS", data);
		});
			
	},
	render: function() {
		if (this.state.title !== "")
			return (
				<div>
					<h1>{this.state.title}</h1>
					<p>{this.state.body}</p>
				</div>
			);
		else
			return (
				<div>Loading...</div>
			);
	}
});

ReactDOM.render(<Iamreact/>, document.getElementById("react"));
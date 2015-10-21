import $ from "jquery";

var Iamreact = React.createClass({
	getInitialState: function() {
		return {
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
			self.setState({ title: data.title, body: data.body });
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
					<h2>{this.state.title}</h2>
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
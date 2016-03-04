import { Router, Route, Link } from "react-router";
import React from "react";

const Top = React.createClass({
	render() {
		return (
			<div>hoge</div>
		);
	}
});

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="top" component={Top} />
			<Route path="users" component={users}>
				<Route path="/user/:userId" component={User} />
			</Route>
			<Route path="*" component={NoMatch} />
		</Route>
	</Router>
),document.body);

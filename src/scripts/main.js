import { render } from "react-dom";
import { Router, Route, Link } from "react-router";
import React from "react";


const Header = React.createClass({
	render() {
		return (
			<header>
				<div className="title">
					<img src="images/title.png" className="title-img" />
				</div>
					<ul className="title-menu">
						<li><Link to="sign_up">新規登録</Link></li>
						<li><Link to="login">ログイン</Link></li>
					</ul>
			</header>
    );
	}
});

const App = React.createClass({
	render() {
		return (
			<section>
				<Header />
				{this.props.children}
			</section>
    );
	}
});

const Login = React.createClass({
	render() {
		return (
			<div>Login</div>
		);
	}
});
const Signup = React.createClass({
	render() {
		return <h3>About</h3>;
	}
});

render((
	<Router>
		<Route path="/" component={App}>
			<Route path="sign_up" component={Signup} />
			<Route path="login" component={Login} />
		</Route>
	</Router>
), document.body);

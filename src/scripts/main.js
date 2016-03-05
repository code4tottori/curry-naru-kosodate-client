import { render } from "react-dom";
import { Router, Route, Link } from "react-router";
import React from "react";


const Header = React.createClass({
	render() {
		return (
			<header>
				<div className="title">
					<Link to="/"><img src="images/title.png" className="title-img" /></Link>
				</div>
					<ul className="title-menu">
						<li><Link to="sign_up">新規登録</Link></li>
						<li><Link to="login">ログイン</Link></li>
					</ul>
			</header>
    );
	}
});

const Footer = React.createClass({
	render() {
		return (
			<footer>
				<div>
					footer
				</div>
			</footer>
		);
	}
});

const App = React.createClass({
	render() {
		return (
			<section>
				<Header />
				{this.props.children}
				<Footer />
			</section>
    );
	}
});

const Login = React.createClass({
	render() {
		return (
			<section>
				<form action="" method="post">
					<h1 className="page-title">ログイン</h1>
					<div className="form-box">
						<div className="form-contents">
							<p className="form-text">ユーザー名</p>
							<input type="text" className="form-textarea" required />
						</div>
						<div className="form-contents">
							<p className="form-text">パスワード</p>
							<input type="password" className="form-textarea" required />
						</div>
						<input type="submit" value="ログイン" className="submit-button"></input>
					</div>
				</form>
			</section>
		);
	}
});
const Signup = React.createClass({
	render() {
		return (
			<section>
				<form action="" method="post">
					<h1 className="page-title">新規登録</h1>
					<div className="form-box">
						<div className="form-contents">
							<p className="form-text">Email</p>
							<input type="text" className="form-textarea" required />
						</div>
						<div className="form-contents">
							<p className="form-text">ユーザー名</p>
							<input type="text" className="form-textarea" required />
						</div>
						<div className="form-contents">
							<p className="form-text">パスワード</p>
							<input type="password" className="form-textarea" required />
						</div>
						<div className="form-contents">
							<p className="form-text">パスワード(確認)</p>
							<input type="password" className="form-textarea" required />
						</div>
						<input type="submit" value="ログイン" className="submit-button"></input>
					</div>
				</form>
			</section>
		);
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

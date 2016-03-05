import { render } from "react-dom";
import { Router, Route, Link } from "react-router";
import React from "react";


const Header = React.createClass({
	render() {
		return (
			<header>
				<div className="title">
					<Link to="top"><img src="images/title.png" className="title-img" /></Link>
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

const Top = React.createClass({
	render() {
		return (
			<section>
				<section className="top-thumbnail">
					<img src="images/thumbnail.png" />
					<div className="try-nursery">
						<Link to="sign_up">自宅付近の病児施設を探してみる</Link>
					</div>
				</section>
				<section className="service-detail">
					<ul>
						<li>
							<img src="images/heart.png" />
							<p className="detail-title">お子さんが急病になっても安心</p>
							<p className="detail-description">24時間いつでもご予約ができます。<br />
							突然の発熱があっても安心して翌日から預けることができます</p>
						</li>
						<li>
							<img src="images/location.png" />
							<p className="detail-title">ご自身の一番都合の良い場所を探せます</p>
							<p className="detail-description">自宅だけでなく、職場や出張などのご都合に合わせた対応も可能です。</p>
						</li>
						<li>
							<img src="images/nice.png" />
							<p className="detail-title">安心のサービスが盛りだくさん</p>
							<p className="detail-description">いつでもキャンセル可能であったり、お子さんのカルテを作成することで予めお子さんの性格や病態を施設の方に伝えることができます</p>
						</li>
					</ul>
					<p className="try-nursery-btn">
						<Link to="sign_up">自宅付近の病児施設を探してみる</Link>
					</p>
				</section>
			</section>
		);
	}
});

const Index = React.createClass({
	render() {
		return (
			<section>
				
			</section>
		);
	}
});

const Login = React.createClass({
	render() {
		return (
			<section>
				<form action="http://localhost/index" method="">
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
				<form action="" method="">
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
			<Route path="top" component={Top} />
			<Route path="index" component={Index} />
			<Route path="sign_up" component={Signup} />
			<Route path="login" component={Login} />
		</Route>
	</Router>
), document.body);

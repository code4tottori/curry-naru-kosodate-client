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
				<section className="calendar">
					<p className="section-title">まず日付を選びましょう</p>
						<table border="0" cellSpacing="1" cellPadding="1" backgroundColor="#CCCCCC" style={["font: 12px, color: #666666"]}>
							<tr>
								<td align="center" colSpan="7" backgroundColor="#EEEEEE" height="18" style={["color: #666666"]}>2016年3月</td></tr>
							<tr>
								<td align="center" width="20" height="18" backgroundColor="#FF3300" style={["color: #FFFFFF"]}>日</td>
								<td align="center" width="20" backgroundColor="#C7D8ED" style={["color: #666666"]}>月</td>
								<td align="center" width="20" backgroundColor="#C7D8ED" style={["color: #666666"]}>火</td>
								<td align="center" width="20" backgroundColor="#C7D8ED" style={["color: #666666"]}>水</td>
								<td align="center" width="20" backgroundColor="#C7D8ED" style={["color: #666666"]}>木</td>
								<td align="center" width="20" backgroundColor="#C7D8ED" style={["color: #666666"]}>金</td>
								<td align="center" width="20" backgroundColor="#A6C0E1" style={["color: #666666;"]}>土</td>
							</tr>
							<tr>
								<td align="center" height="18" backgroundColor="#FFCC99" style={["color: #666666"]}>　</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>　</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>1</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>2</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>3</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>4</td>
								<td align="center" backgroundColor="#FF3300" style={["color: #FFFFFF"]}>5</td>
							</tr>
							<tr>
								<td align="center" height="18" backgroundColor="#FFCC99" style={["color: #666666"]}>6</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>7</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>8</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>9</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>10</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>11</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>12</td>
							</tr>
							<tr>
								<td align="center" height="18" backgroundColor="#FFCC99" style={["color: #666666"]}>13</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>14</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>15</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>16</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>17</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>18</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>19</td>
							</tr>
							<tr>
								<td align="center" height="18" backgroundColor="#FFCC99" style={["color: #666666"]}>20</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>21</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>22</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>23</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>24</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>25</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>26</td>
							</tr>
							<tr>
								<td align="center" height="18" backgroundColor="#FFCC99" style={["color: #666666"]}>27</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>28</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>29</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>30</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>31</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>　</td>
								<td align="center" backgroundColor="#FFFFFF" style={["color: #666666"]}>　</td>
							</tr>
							<tr>
								<td backgroundColor="#FFFFFF" height="18">&nbsp;</td>
								<td backgroundColor="#FFFFFF">&nbsp;</td>
								<td backgroundColor="#FFFFFF">&nbsp;</td>
								<td backgroundColor="#FFFFFF">&nbsp;</td>
								<td backgroundColor="#FFFFFF">&nbsp;</td>
								<td backgroundColor="#FFFFFF">&nbsp;</td>
								<td backgroundColor="#FFFFFF">&nbsp;</td>
							</tr>
						</table>
				</section>
				<section className="select-detail">
					<p className="section-title">条件を選びましょう</p>
					<p className="detail-name">利用料金</p>
					<input type="text" className="detail-form" />
					<p className="childa">~</p>
					<input type="text" />
					<p className="detail-name">利用条件</p>
					<p className="detail-content-left detail-content">病児</p>
					<p className="detail-content">病後</p>
					<p className="detail-name">キャンセル待ち</p>
					<p className="detail-content-left detail-content">あり</p>
					<p className="detail-content">なし</p>
					<p className="detail-name">救急体制</p>
					<p className="detail-content-left detail-content">あり</p>
					<p className="detail-content">なし</p>
				</section>
				<div className="big-cursor">
					<img src="images/big-cursor.png" />
				</div>
				<section className="regions">
					<p className="section-title">地域一覧</p>
					<p className="region">鳥取市</p>
					<p className="region">鳥取市</p>
					<p className="region">鳥取市</p>

				</section>
				<section className="nurseries-list">
					<div className="nursery">
						<img src="images/nursery-thumbnail.png" className="nursery-thumbnail" />
						<div className="nursery-description">
							<h2>キッズルームこぐま</h2>
							<p>末広温泉町566せいきょうこどもクリニック内</p>
							<p>1000円/人</p>
							<p>8:00~18:00</p>
							<div className="reserve-btn">予約する</div>
						</div>
					</div>
					<div className="nursery">
						<img src="images/nursery-thumbnail.png" className="nursery-thumbnail" />
						<div className="nursery-description">
							<h2>キッズルームこぐま</h2>
							<p>末広温泉町566せいきょうこどもクリニック内</p>
							<p>1000円/人</p>
							<p>8:00~18:00</p>
							<div className="reserve-btn">予約する</div>
						</div>
					</div>
					<div className="nursery">
						<img src="images/nursery-thumbnail.png" className="nursery-thumbnail" />
						<div className="nursery-description">
							<h2>キッズルームこぐま</h2>
							<p>末広温泉町566せいきょうこどもクリニック内</p>
							<p>1000円/人</p>
							<p>8:00~18:00</p>
							<div className="reserve-btn">予約する</div>
						</div>
					</div>
				</section>
				<section className="recent-nurseries">

				</section>
			</section>
		);
	}
});

const Login = React.createClass({
	render() {
		return (
			<section>
				<form action="http://localhost/#/index" method="">
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

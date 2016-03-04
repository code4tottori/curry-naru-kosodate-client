import { Router, Route, Link } from "react-router";
import React from "react";

const App = React.createClass({

});

const Top = React.createClass({
	render() {
	}
});

const Users = React.createClass({
	render() {
		return (
			<div>
				<h1>Users</h1>
				<div className="master">
					<ul>
						{/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
					</ul>
				</div>
				<div className="detail">
					{this.props.children}
				</div>
			</div>
		);
	}
});

const User = React.createClass({
	componentDidMount() {
		this.setState({
			// route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
		});
	},

	render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    );
  }
})
render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="top" component={Top} />
			<Route path="users" component={Users}>
				<Route path="/user/:userId" component={User} />
			</Route>
			<Route path="*" component={NoMatch} />
		</Route>
	</Router>
), document.body);

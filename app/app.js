//app/app.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

class App extends Component {
	render() {
		return <h1>React Get Started</h1>;
	}
}

export default hot(module)(App);

ReactDOM.render(<App />, document.getElementById("root"));

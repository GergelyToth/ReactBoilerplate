var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Foundation
$(document).foundation();

// App SCSS
require('style!css!sass!Styles/app.scss');

ReactDOM.render(
	<p>Boilerplate 3 Project</p>,
	document.getElementById('app')
);
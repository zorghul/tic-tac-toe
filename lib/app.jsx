'use strict';

var React = require('react');

var ALTERNANCE_MS = 300;

var boxStyle = {
	'height':'100px',
	'width':'100px'
};

var Box = React.createClass({
	'getInitialState': function onGetInitialState() {
	return {'value' : this.props.initialValue};
	},
	/*
	'componentWillMount': function onComponentWillMount() {
	var self = this;
	
	this.timer = setInterval(function onTimer (){
	self.setState({
	
	})}
	)}
	*/
  'render': function onRender () {
    return (
      <button style={boxStyle} >{this.state.value}</button>
    );
  }
});


React.render(<Box initialValue='X'/>, document.body);


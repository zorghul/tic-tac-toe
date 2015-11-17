'use strict';

var React = require('react');

var boxStyle = {
	'height':'100px',
	'width':'100px'
};

var Counter = React.createClass({
  getInitialState: function() {
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    return {count: this.props.initialCount};
  },

  handleClick: function() {
    this.setState({count: this.state.count + 1});
  },

  render: function() {
    return react.createElemebt("div", {onClick: this.handleClick}, this.state.count);
  }
});

ReactDOM.render(<Counter initialCount={7}/>, mountNode);

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={boxStyle}>{this.props.value}</button>
    );
  }
});

React.render(<Box value='Y'/>, document.body);

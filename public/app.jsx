var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    return (
      <div>
        <h2>Hello {name}</h2>
      </div>
    )
  }
});

var GreeterInput = React.createClass({
  greetMessage: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.greetingMessage(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.greetMessage}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    )
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {name: 'Siddhartha'}
  },
  greetingMessage: function(name) {
    this.setState({name: name});
  },
  getInitialState: function() {
    return {name: this.props.name}
  },
  render: function() {
    var name = this.state.name;
    return (
      <div>
        <GreeterMessage name={name}/>
        <GreeterInput greetingMessage={this.greetingMessage}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="Siddu"/>, document.getElementById('app'));

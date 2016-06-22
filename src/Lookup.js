var React = require('react');

var IcdCode = require('./IcdCode');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      query: '',
      results: []
    };
  },

  submit: function(ev) {
    ev.preventDefault();

    var newResults = <IcdCode title={this.state.query} />;

    this.setState({
      results: this.state.results.concat([newResults]),
      query: ''
    });
  },

  updateInput: function(ev) {
    this.setState({
      query: ev.target.value
    });
  },

  render: function() {
    return <div>
      <form onSubmit={this.submit}>
        <input onChange={this.updateInput} value={this.state.query} type="query" placeholder="Your search" />
        <input type="submit" value="Lookup" />
      </form>
      <h2>Results</h2>
      <div>{this.state.results}</div>
    </div>;
  }
});

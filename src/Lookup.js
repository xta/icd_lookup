var React = require('react');

var IcdCode = require('./IcdCode');
var data = require('../data/icd9.json')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      query: '',
      results: []
    };
  },

  componentWillMount: function() {
    var results = [];
    for (i = 0; i < data.length; i++) {
      var title = data[i].title;
      var newResult = <IcdCode title={title} />;
      results.push(newResult);
    }

    this.setState({ results: results });
  },

  submit: function(ev) {
    ev.preventDefault();

    var newResult = <IcdCode title={this.state.query} />;

    this.setState({
      results: this.state.results.concat([newResult]),
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

import React, { Component } from 'react';

class SearchBook extends Component {
  state = {
    query: ''
  };

  checkInput = () => (this.state.query.length > 1 ? true : false);

  handleChange = e => this.setState({ query: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    if (this.checkInput()) {
      await this.props.getBooks(this.state.query);
      this.setState({ query: '' });
    } else {
      alert('Error: search query is empty!');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
          <input
            className="form-control mr-2 flex-grow-1"
            placeholder="Enter search query"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button className="btn btn-outline-success my-2 my-sm-0">
            Search
          </button>
        </div>
      </form>
    );
  }
}

export { SearchBook };

import React, { Component } from 'react';
import Modal from './Modal';
class BookList extends Component {
  render() {
    const { data } = this.props;
    return (
      
      <div>
        {data.length > 0 && <h3>Search results: </h3>}
        <div className="row equal-cols">{data.map(item => (
          <div className="col-4" key={item.id}><Modal  data={item} /></div>
        ))}</div>
      </div>
    );
  }
}

export { BookList };

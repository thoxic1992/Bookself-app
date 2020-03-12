import React, { Component } from 'react';
import Popup from "reactjs-popup";


class Modal extends Component {
  render() {
    const {
      data: { title, subtitle, tmb, description, publishedDate, authors, categories }
    } = this.props;
    return (
      
      <div>
        <Popup modal trigger={
          <a>
            <div className="card-group">
              <div className="card mb-3 p-3">
                <img src={tmb} className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{title}</h5>
                  <h6 className="card-title text-truncate">{authors}</h6>
                </div>
              </div>
            </div>
          </a>}>
          <div className="card mb-3 p-3">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-title">{subtitle}</h6>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={tmb} className="card-img img-fluid " alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body p-0">
                  <p className="card-text pl-3">{description}</p>
                  <div className="card-text">
                    <div className="text-right">
                      <em>{publishedDate}</em>
                    </div>
                    <div className="text-right mb-3">
                      <em>{authors}</em>
                    </div>
                    <div className="text-right">
                    <em>{categories}</em>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popup>
      </div>
      
    );
  }
}

export default Modal;

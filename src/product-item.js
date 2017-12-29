import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './App.css';

class ProductItem extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      page: 1,
    };
  }

  componentDidMount() {}
  
  render() {
      return (
        <div className="pics-item" key={item.productId}>
        <div className="pics-image">
            <Link to={{ pathname: '/detail/'+item.productId} }>
            <img src={item['Big Image']} alt={item['Short Description']} />
            </Link>
        </div>
        <div className="pics-meta">
        <div className="pics-comment-count"></div>
        </div>
        </div>
      );
    }
  }
  
  export default Detail;
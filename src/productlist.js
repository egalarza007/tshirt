import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Detail from './detail.js';
import { Link, Route } from 'react-router-dom'
import './App.css';

const products = [];
const ids = [];
const names = [];

const contains = function (needle) {
  // Per spec, the way to identify NaN is that it is not equal to itself
  var findNaN = needle !== needle;
  var indexOf;

  if (!findNaN && typeof Array.prototype.indexOf === 'function') {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function (needle) {
      var i = -1, index = -1;

      for (i = 0; i < this.length; i++) {
        var item = this[i];

        if ((findNaN && item !== item) || item === needle) {
          index = i;
          break;
        }
      }

      return index;
    };
  }

  return indexOf.call(this, needle) > -1;
};

class ProdctList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: products,
      path: props && props.path ? props.path : "/api/products",
      page: props && props.page ? props.page : 1,
    };

    this.fetchData = this.fetchData.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.setState({ products: [], page: 1 });
  }

  fetchData() {
    let config = {
      headers: { 'Access-Control-Allow-Origin': '*' }
    };

    fetch(this.state.path + '/' + this.state.page, config)
      .then(
      response => response.json()
      )
      .then(data => {

        let products = data.filter(function (item) {
          if (contains.call(ids, item.productId) || contains.call(names, item.Name)) {
            return false; // skip
          }
          ids.push(item.productId);
          names.push(item.Name);
          return true;
        })
          .map((item) => {
            return (
              <div className="pics-item" key={item.productId}>

                <div className="pics-image">

                  <Link to={{ pathname: '/detail/' + item.productId, query: { id: item.productId } }}>
                    <img src={item['Big Image']} alt={item['Short Description']} />
                  </Link>
                </div>
                <div className="pics-meta">
                  <div className="pics-comment-count"></div>
                </div>
              </div>)
          })

        this.setState({
          products: this.state.products.length > 0 ? this.state.products.concat(products) : products,
          page: this.state.page + 1
        });

      });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ products: [], page: 1, path: newProps.path });
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (

      <div className="pics-list">
         <Route path='/detail:id' component={Detail}/>
            <div className="pics-list-content">
              <div className="pics-list-grid"> 
              { this.state.products.length === 0
                          ? <div style={{textAlign: 'center',width:'100%'}} className="alert alert-warning">Searching our closets...</div>
                          : null
                      }
                  
                <InfiniteScroll
                   refreshFunction={this.refresh}
                    next={
                      this.fetchData
                    }
                    hasMore={true}
                 
                    endMessage={
                      <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }>
      
                      {this.state.products}  
                  </InfiniteScroll>        
              </div>
              <div className="pics-list-footer">
              </div>
            </div>

        </div>
    );
  }
}

export default ProdctList;

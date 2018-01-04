import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Header from './header';
import Footer from './footer';
import ProductList from './productlist';
import './App.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:props.match.params.id,
      url:"/api/search/"+props.match.params.id,
      page:1,
      redirect:false,
      products: [],
      history : props.history
      
    };

    this.searchHandler = this.searchHandler.bind(this);
  }


  searchHandler(search){
    let pathUrl = '/search/'+search;
    this.setState({ 
        id: search,
        url:"/api/search/"+ search,
        search:search, 
        path:pathUrl,
        redirect:true
    });

    this.state.history.push(pathUrl)

  }

    render() {
      return (
        <div className="App">
        <Header 
          search={this.state.id} 
          redirect={this.state.redirect} 
          searchHandler={this.searchHandler} />

          <p className="App-intro">
          </p>
          <ProductList 
            path={this.state.url} 
            page={this.state.page}/>
  
          <Footer/>
        </div>
      );
    }
}

export default withRouter(Search);
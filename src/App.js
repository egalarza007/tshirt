import React from 'react';
import Header from './header';
import Footer from './footer';
import ProductList from './productlist';
import {
  withRouter,
  Redirect
} from 'react-router-dom';
import './App.css';

const redirect = false;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      page: 1,
      redirect: redirect
    };

    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(search) {
    let pathUrl = '/search/' + search;

    this.setState({
      id: search,
      url: "/api/search/" + search,
      search: search,
      path: pathUrl,
      redirect: true
    });
  }
  componentWillMount() {}

  render() {
    if (this.state.redirect && this.state.path) {
      return <Redirect to = {
        this.state.path
      }
      />;
    }

    return ( 
      <div className = "App" >
      <Header searchHandler = { this.searchHandler }/> 
      < ProductList />
      <Footer />
      </div>
    );
  }
}

export default withRouter(App);
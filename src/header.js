import React from 'react';
import SearchBox from './searchBox';

const searchTerm = "";
const redirect = false;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: searchTerm,
      handler: props.searchHandler,
      redirect: redirect
    };

    this.searchHandler = this.searchHandler.bind(this)

  }

  searchHandler(search) {
    this.setState({ search: search })
    this.state.handler(search);

  }

   render() {
      return (
      <header>
        <div className="header-wrapper">
        <div className="header">
        <h1 className="logo">
          <span>TShirtHustle </span>
        </h1>
        <SearchBox 
          searchHandler={ this.searchHandler} 
          search={this.state.search} 
          redirect={this.state.redirect}/>
      </div>
      </div>
    </header>        
      );
   }
}

export default Header;
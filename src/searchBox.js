import React from 'react';
import { withRouter } from 'react-router-dom';

const redirect = false;

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = (props && props.redirect) ? props.redirect : redirect;
    this.state = {
      search: "",
      page: 1,
      handler: props.searchHandler,
      redirect: redirect,
      history: props.history,
      locate: props.location,
      match: props.location,
      path: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(evt) {
    this.setState({ search: evt.target.value });
  }

  handleClick(evt) {
    let pathUrl = '/search/' + this.state.search;
    let id = this.state.search;
    this.setState({
      redirect: true,
      path: pathUrl, id: id,
      search: id
    });
    this.state.handler(id);

  }

  render() {
    let divStyle = {
      margin: '1px 2px',
      padding: '.25em'
    };

      return (
       <div>
       <form className="commentForm" onSubmit={ this.handleChange } >
        <input type="text" onChange={ this.handleChange } style={divStyle}/>
        <input
          type="submit"
          value="Search"
          onClick={this.handleClick}
          className="btn btn-info"
        />
        </form>
      </div>
      );
   }
}

export default withRouter(SearchBox);

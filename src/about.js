import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router';
import Header from './header.js';
import Footer from './footer.js';
import Contact from './contact';
import './App.css';

class About extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.match.params.id,
      product: {},
      page: 1,
      detail: ''
    };
    this.searchHandler = this.searchHandler.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
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

  render() {

    if(this.state.redirect && this.state.path){
      return <Redirect to={this.state.path} />;
    }

    return (
      <div className="App">
      <Header searchHandler={this.searchHandler}/>

      <div className="container">
            <div className="row">
                <div className="col-md-4">

                    <div className="widget-wrapper">

                    <Contact/>
                    </div>
                </div>

                <div className="col-md-8">
                <h2>About Us</h2>
                <p>
                We are just a team of people who like to go thru life in t-shirts. 
                Our goal is to have fun, laugh, look good, feel comfortable, get good jobs while rocking a t-shirt
                </p>
                <hr/>
                <h2>Stalk Us</h2>
                <p>
                Stalk Us, Pook Us, Follow us, or tweet.Check us out on Facebook, Twitter, tumblr and Pintrest! 
                See what we're up to and get hip to deals.
                </p>
                <div className="widget">
            <a href="https://www.facebook.com/tshirthustle" className="fa fa-facebook">  </a>
            <a href="https://www.Twitter.com/tshirthustle" className="fa fa-twitter">  </a>
            <a href="https://www.pinterest.com/tshirthustle" className="fa fa-pinterest">  </a>
  
                </div>
                <hr/>
                <h2>Affiliate Disclosure</h2>
                <small>
            The owner of http://tshirthustle.com may receive compensation for recommendations made in reference to the products or services on this website.
            This compensation may be in the form of money, services or complimentary products and could exist without any action from a website visitor. 
            Should you purchase a product or service that was recommended by http://tshirthustle.com,
            it is understood that some form of compensation might be made to the http://tshirthustle.com owner. For example, if you click on an affiliate link 
            at http://tshirthustle.com and then make a purchase of the recommended product or service, http://tshirthustle.com owner may receive compensation.
            This Compensation Disclosure has been provided for your protection and to fully disclose any relationship between htt://tshirthustle.com product or service recommendations 
                and the owners of those product or services.

                </small>
                </div>
            </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default withRouter(About);

import React, { Component } from 'react';
import {withRouter, Redirect} from 'react-router';
import Header from './header.js';
import Footer from './footer.js';
import Contact from './contact';
import './App.css';

class Detail extends Component {
  constructor(props){
    super();
    this.state = {
      id:props.match.params.id,
      product:{},
      page:1,
      detail:''
    };
    this.searchHandler = this.searchHandler.bind(this)
  }
  fetchData(){
    let config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };
    fetch("/api/detail/"+this.state.id, config)
      .then(
        response => response.json()
      )
      .then(item=>{
        console.log(item);
        let detail =
        <div className="row">
        <div className="col-md-12">

        <div className="pics-item" key={item.productId}>
        <div className="pics-image">
        <a href={item.url}>
          <img src={item.image} alt={item.name} />
          </a>
 
        </div>
        </div> 
        <div className="social-media">
          <div className="addthis_native_toolbox"></div>
        </div>
        <div className="product-meta">
          <h2 className="h2-responsive">{ item.name}</h2>

          <a className="btn btn-danger" href={item.url}> See Price</a>
          <hr/>
          <p>{item.description}</p>
          <ul className="rating inline-ul">
            <li><i className="fa fa-star amber-text"></i></li>
            <li><i className="fa fa-star amber-text"></i></li>
            <li><i className="fa fa-star amber-text"></i></li>
            <li><i className="fa fa-star amber-text"></i></li>
            <li><i className="fa fa-star"></i></li>
          </ul>
          <div className="pics-comment-count"></div>
          </div>
      </div> 
      </div>;

      this.setState({
        detail:detail,
        product:item
      });
      this.addFB();
      window.scrollTo(0, 0);
      
    });

  }

  componentDidMount(){
    this.fetchData();
  }

  addFB(){
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '1321276891230482',
        xfbml      : true,
        version    : 'v2.7'
      });
    }

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }


  searchHandler(search){
        let pathUrl = '/search/'+search;
        this.setState({ 
          id: search,
          url:"/api/search/"+ search,
          search:search,
          path:pathUrl,
          redirect:true}
        );
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

                  {this.state.detail}

                <div className="row"> 
               
                        <div className="col-sm-12 col-md-12" id="fb-wrapper">
                            <div className="fb-like" data-send="true" data-width="450" data-show-faces="true"></div>
                            <div className="fb-comments" data-href="http://tshirthustle.com/detail/{{detail.product.productid}}" data-num-posts="4" data-width="620"></div>
                        </div>
                </div>

                </div>
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(Detail);

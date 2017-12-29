import React from 'react';

class Footer extends React.Component {
   render() {
      return (
  
        <footer >
                <hr/>
           <div className="row">
          <div className="col-md-4">
          <div className="widget">
			
          <h4 className="widget-title">Stalk Us</h4>
          <a href="https://www.facebook.com/tshirthustle" className="fa fa-facebook">  </a>
          <a href="https://www.Twitter.com/tshirthustle" className="fa fa-twitter">  </a>
          <a href="https://www.pinterest.com/tshirthustle" className="fa fa-pinterest">  </a>

					</div>
          </div>
          <div className="col-md-4">
            <div className="footer">&copy; TShirtHustle</div>
          </div>
          <div className="col-md-4">
          <div className="widget">

          </div>
          <h4 className="widget-title">About Us</h4>
          <small>We are just a team of people who like to go thru life in t-shirts. 
            Our goal is to have fun, laugh, look good, feel comfortable, get good jobs while rocking a t-shirt</small>
          </div>
        
        </div>
        </footer>        
      );
   }
}

export default Footer;
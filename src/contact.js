import React from 'react';

class Contact extends React.Component {
   
    render() {
      return (
        <div>
        <h4>Subscription form:</h4>
        <br/>
            <div className="card subform">
                <div className="card-block" >
                <form>
                    <p><strong>Subscribe to our newsletter</strong></p>
                    <p>Stay updates on all the lastest sales, coupons, and new product news.</p>
                    <div className="md-form">
                        <i className="fa fa-user prefix"></i>
                        <input type="text" id="name" className="form-control" />
                        <label htmlFor="name">Your name</label>
                    </div>
                    <div className="md-form">
                        <i className="fa fa-envelope prefix"></i>
                        <input type="email" pattern="[^ @]*@[^ @]*" id="email" className="form-control" />
                        <label htmlFor="email">Your email</label>
                    </div>
                    <button className="btn btn-danger" > Submit</button>
                </form>
                </div>
            </div>   
        </div>          
      );
   }
}

export default Contact;
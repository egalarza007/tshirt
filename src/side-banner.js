import React from 'react';

class SideBanner extends React.Component {
   
    render() {
      return (
        <div>
        <h4>What's Hot:</h4>
        <br/>
        <div className="card subform">
        <div className="card-block">
            <a  rel="noopener noreferrer" target="_blank" href="http://shareasale.com/r.cfm?b=1002058&u=1014588&m=49310&urllink=&afftrack=" > 
              <img src="../500X500.jpg" alt="Grads"  style={{width: 100, height: 200, position: 'absolute'}}/>
            </a>

        </div> 
         </div> 
        </div> 
        
 


      );
   }
}

export default SideBanner;
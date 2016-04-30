import React, {PropTypes} from 'react';

export default React.createClass({
  render: function(){
    return(
          <div className="main userinfo userinfo--font row">
            <img className = "userinfo_logo main--center" src={this.props.user.pic} />
            <p className = "userinfor__name">{this.props.user.firstName} {this.props.user.lastName}</p>
            <p className = "userinfor__email">{this.props.user.email}</p>
          </div>
    );
  }
});

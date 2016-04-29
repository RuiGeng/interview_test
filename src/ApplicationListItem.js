import React, {PropTypes} from 'react'

export default React.createClass({
    render: function () {
        return (
          <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-6 application__item" >
            <a href="#"><img className ="application_logo" application = {this.props.application.src} /></a>
          </div>
        );
    }
});

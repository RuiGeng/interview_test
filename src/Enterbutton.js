import React from 'react'

export default React.createClass({
    render: function() {
        return(
            <div className = "row" >
              <button type="button" className = "mainlogin mainlogin__nextbtn main--center" onClick={this.props.validateUser}>{this.props.text}</button>
            </div>
        );
    }
});

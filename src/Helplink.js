import React from 'react'

export default React.createClass({
    render: function() {
        return(
            <div className = "row mainlogin__helplink" >
              <a href="#">{this.props.text}</a>
            </div>
        );
    }
});

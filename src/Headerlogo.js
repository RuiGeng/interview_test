import React from 'react'

export default React.createClass({
    render: function() {
        return(
            <div className = "title row" >
              <img className = "title__logo title--center" src = {this.props.url} />
            </div>
        );
    }
});

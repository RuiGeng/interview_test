import React from 'react'

export default React.createClass({
    getInitialState: function() {
        return {
            userEmail: ""
        };
    },
    /* use searchUser function to get user information when user input the email address */
    getUserEmail: function(event) {
        var email = event.target.value;
        this.setState({
            userEmail: email
        });
        this.props.searchUser(email);
    },

    render: function() {
        return(
          <div className = "row" >
            <input id="emailinput" type = "email" className = "mainlogin mainlogin__emailinput main--center" placeholder="EMAIL" onBlur={this.getUserEmail} />
          </div>
        );
    }
});

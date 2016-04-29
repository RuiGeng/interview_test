import React from 'react'

export default React.createClass({
    getInitialState: function() {
        return {
            password: ""
        };
    },

    getUserPassword: function(event) {
        var passwd = event.target.value;
        this.setState({
            password: passwd
        });
        this.props.getPassword(passwd);
    },

    render: function() {
        return(
            <div className = "row" >
              <input id="passwordinput" type = "password" className = "mainlogin mainlogin__passwdinput main--center" placeholder="PASSWORD" onBlur={this.getUserPassword} />
            </div>
        );
    }
});

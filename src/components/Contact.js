var React = require('react');

var Contact = React.createClass({
  getInitialState: function () {
    return {
      password: 'swordfish',
      authorized: false
    };
  },

  authorize: function (e) {
    e.preventDefault(); // original submit refreshes page
    var password = e.target.querySelector(
      'input[type="password"]').value;
    var auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  },

  render: function () {
    var login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );
    
    var contactInfo = (
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    );
    
    return (
      <div id="authorization">
        <h1>{this.state.authorized? "Contact" : "Enter the Password"}</h1>
        {this.state.authorized? contactInfo : login}
      </div>
    );
  }
});

module.exports = Contact;
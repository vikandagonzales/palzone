// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { signup } from '../../state/actions/auth';

// ==========

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      passwordError: false,
      passwordClasses: 'input is-large',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      verify_password: ''
    };
  };

  signup = event => {
    event.preventDefault();
    const { first_name, last_name, email, password, verify_password } = this.state;
    if (password !== verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-danger',
        passwordError: true
      });
    } else {
      const user = { first_name, last_name, email, password };
      this.props.signup(user, this.props.history);
    }
  };

  render () {
    return (
      <div id="signup">
        <section className="hero is-fullheight is-bold is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <figure className="image has-padding-bottom">
                    <img src="./assets/logo-red.svg" alt="Palzone" />
                  </figure>
                  <form onSubmit={this.signup}>
                    <div className="field">
                      <p className="control">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="First Name"
                          id="first_name"
                          value={this.state.first_name}
                          onChange={event => this.setState({first_name: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                    <div className="field">
                      <p className="control">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="Last Name"
                          id="last_name"
                          value={this.state.last_name}
                          onChange={event => this.setState({last_name: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                    <div className="field">
                      <p className="control">
                        <input
                          className="input is-large"
                          type="email"
                          placeholder="Email"
                          id="email"
                          value={this.state.email}
                          onChange={event => this.setState({email: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                    <div className="field">
                      <p className="control">
                        <input
                          className={this.state.passwordClasses}
                          type="password"
                          placeholder="Password"
                          id="password"
                          value={this.state.password}
                          onChange={event => this.setState({password: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                    <div className="field">
                      <p className="control">
                        <input
                          className={this.state.passwordClasses}
                          type="password"
                          placeholder="Verify Password"
                          id="verify_password"
                          value={this.state.verify_password}
                          onChange={event => this.setState({verify_password: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                    {
                      !this.state.passwordError ? (
                        <p className="help is-danger">
                          Passwords do not match.
                        </p>
                      ) : null
                    }
                    <div className="control has-text-centered">
                      <button className="button is-large is-main">Sign Up</button>
                    </div> 
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  // signupError: state.auth.signupError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // signup
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
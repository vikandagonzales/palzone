// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { login } from '../../state/actions/auth';

// ==========

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  };

  login = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const credentials = { email, password };
    this.props.login(credentials, this.props.history);
  };

  render () {
    return (
      <div id="login">
        <section className="hero is-fullheight is-bold is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-4 is-offset-4">
                  <figure className="image has-padding-bottom">
                    <img src="./assets/logo-red.svg" alt="Palzone" />
                  </figure>
                  <form onSubmit={this.login}>
                    <div className="field">
                      <p className="control has-icons-left">                          
                        <input
                          className="input is-large"
                          type="email"
                          placeholder="Email"
                          id="email"
                          value={this.state.email}
                          onChange={event => this.setState({email: event.target.value})}
                          required
                        />
                        <span class="icon is-large is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control has-icons-left">
                        <input
                          className="input is-large"
                          type="password"
                          placeholder="Password"
                          id="password"
                          value={this.state.password}
                          onChange={event => this.setState({password: event.target.value})}
                          required
                        />
                        <span class="icon is-large is-left">
                          <i class="fas fa-lock"></i>
                        </span>
                      </p>           
                    </div>
                    {
                      !this.props.loginError ? (
                        <p className="help is-danger">
                          Email or password is incorrect.
                        </p>
                      ) : null
                    }
                    <div className="control has-text-centered">
                      <button className="button is-large is-main">Log In</button>
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
  // loginError: state.auth.loginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
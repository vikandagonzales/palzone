import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { verify } from "./actions/auth.actions";

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ verify }, dispatch);
};

class App extends Component {

  componentDidMount = () => {
    this.props.verify()
  }

  render() {
    return (
      <div>
        <h1>Palzone</h1>
        <Switch>
          <Route exact path="/login" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

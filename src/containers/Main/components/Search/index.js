// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../state/actions/auth';

// ==========

class Search extends React.Component {
  render () {
    return (
      <div className="search has-margin-bottom">
        <p className="control has-icons-right">
          <input className="input" type="text" placeholder="Search" />
          <span className="icon is-right">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  // logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
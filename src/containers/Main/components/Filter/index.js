// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../state/actions/auth';

// ==========

class Filter extends React.Component {
  render () {
    return (
      <div className="filter has-margin-bottom">
        <div className="tags">
          <span className="tag">attractions</span>
          <span className="tag">hotels</span>
          <span className="tag">restaurants</span>
          <span className="tag">retail</span>
          <span className="tag">transportation</span>
        </div>
      </div>     
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  // logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
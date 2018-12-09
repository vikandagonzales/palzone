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
          <span className="tag">Attractions</span>
          <span className="tag">Hotels</span>
          <span className="tag">Restaurants</span>
          <span className="tag">Retail</span>
          <span className="tag">Transportation</span>
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
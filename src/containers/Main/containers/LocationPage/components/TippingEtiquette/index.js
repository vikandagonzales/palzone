// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../state/actions/auth';

// ==========

class TippingEtiquette extends React.Component {
  render () {
    return (
      <div className="tipping">
        <ul>
          <li><strong>Tip Description:</strong> 15% - 20%</li>
          <li><strong>Country Name:</strong> United States</li>
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  // logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TippingEtiquette);
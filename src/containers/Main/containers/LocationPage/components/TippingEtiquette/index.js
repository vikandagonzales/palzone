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
        <p>
          Adasd asda sd a sd asd a d asd a sd asdad adsad fgvfvbxc aasfqweq zxvzxcz asdasd qweqweq asdad.
        </p>
        <p className="help is-primary has-text-right pointer" onClick={this.props.toggle}>View translation</p>
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
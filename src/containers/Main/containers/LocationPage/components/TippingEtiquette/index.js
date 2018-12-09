// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../state/actions/auth';

// ==========

class TippingEtiquette extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tip: 'aSDha alsdlash  asdhahsd lshdahsd ad ahsdahld as da sdahdlad ads da das dhasd as da sdhasdl adh a asdhasd lahsdl adshaldha sdlada.'
    }
  };

  render () {
    return (
      <div className="tipping">
        <p>
          {this.state.tip}
        </p>
        <p className="help is-primary has-text-right pointer" onClick={this.props.toggle} text={this.state.tip}>View translation</p>
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
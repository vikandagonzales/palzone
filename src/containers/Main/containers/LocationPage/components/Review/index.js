// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../state/actions/auth';

// ==========

class Review extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      review: 'aSDha alsdlash  asdhahsd lshdahsd ad ahsdahld as da sdahdlad ads da das dhasd as da sdhasdl adh a asdhasd lahsdl adshaldha sdlada.'
    }
  };

  render () {
    return (
      <div className="review">
        <div>
          <span className="title is-5">Nice atmosphere</span>
          <div className="is-pulled-right">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>
        <p className="subtitle is-7">Nora Mirror</p>
        <p>
          {this.state.review}
        </p>
        <p className="help is-primary has-text-right pointer" onClick={this.props.toggle} text={this.state.review}>View translation</p>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  // logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Review);
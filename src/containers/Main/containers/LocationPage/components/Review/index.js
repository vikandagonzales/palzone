// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../state/actions/auth';

// ==========

class Review extends React.Component {
  render () {
      const {title, review, stars, author} = this.props;
    return (
      <div className="review">
        <div>
          <span className="title is-5">{title}</span>
          <div className="is-pulled-right">
              {[...new Array(stars)].map(() => <i className="fas fa-star"></i>)}
          </div>
        </div>
        <p className="subtitle is-7">{author}</p>
        <p>
          {review}
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

export default connect(mapStateToProps, mapDispatchToProps)(Review);
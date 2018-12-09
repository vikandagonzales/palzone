// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLanguages } from '../../../../../../state/actions/main';

// ==========

class Translation extends React.Component {
  componentDidMount () {
    this.props.getLanguages();
  }

  translate = event => {
    event.preventDefault();
    this.props.translate();
    this.props.toggle();
  }

  render () {
    return (
      <div className="translation">
        <form className="has-text-centered" onSubmit={this.translate}>
          <div className="control has-margin-bottom">
            <div className="select">
              <select>
                <option>Select a language</option>
                {
                  this.props.languages.map((language, i) => {
                    return (
                      <option key={i} value={language}>{language}</option>
                    );
                  })
                }
              </select>
            </div>
          </div>
          <div className="control has-text-centered">
            <button className="button is-primary">Select</button>
          </div>
        </form> 
      </div>
    );
  };
};

const mapStateToProps = state => ({
  languages: state.main.languages
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLanguages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Translation);
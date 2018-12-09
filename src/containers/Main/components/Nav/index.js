// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom'

// ==========

class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mapClasses: 'navbar-item',
      listClasses: 'navbar-item',
      profileClasses: 'navbar-item'
    };
  };

  toggle = link => {
    switch (link) {
      case 'map':
        this.setState({
          mapClasses: 'navbar-item is-active',
          listClasses: 'navbar-item',
          profileClasses: 'navbar-item'
        });
        break;
      case 'list':
        this.setState({
          mapClasses: 'navbar-item',
          listClasses: 'navbar-item is-active',
          profileClasses: 'navbar-item'
        });
        break;
      case 'profile':
        this.setState({
          mapClasses: 'navbar-item',
          listClasses: 'navbar-item',
          profileClasses: 'navbar-item is-active'
        });
        break;
      default:
        break;
    }
  };

  componentDidMount () {
    if (window.location.pathname.includes('/map')) {
      this.setState({
        mapClasses: 'navbar-item is-active',
        listClasses: 'navbar-item',
        profileClasses: 'navbar-item',
      });
    } else if (window.location.pathname.includes('/list')) {
      this.setState({
        mapClasses: 'navbar-item',
        listClasses: 'navbar-item is-active',
        profileClasses: 'navbar-item',
      });
    } else if (window.location.pathname.includes('/profile')) {
      this.setState({
        mapClasses: 'navbar-item',
        listClasses: 'navbar-item',
        profileClasses: 'navbar-item is-active',
      });
    }
  };

  render () {
    return (
      <nav className="navbar is-fixed-bottom">        
        <div className="columns is-mobile">
          <div className="column">
            <Link className={this.state.mapClasses} to="/main/map" onClick={() => {this.toggle('map')}}>
              <span className="lnr lnr-map2"></span>
            </Link>
          </div>
          <div className="column">
            <Link className={this.state.listClasses} to="/main/list" onClick={() => {this.toggle('list')}}>
              <span className="lnr lnr-list"></span>
            </Link>
          </div>
          <div className="column">
            <Link className={this.state.profileClasses} to="/main/profile" onClick={() => {this.toggle('profile')}}>
              <span className="lnr lnr-user"></span>
            </Link>
          </div>         
        </div>
      </nav>
    );
  };
};

export default Nav;
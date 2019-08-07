import React, { Component } from 'react';
import './menu.css'
import { Link } from 'react-router-dom' 


class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  

    }
  }

  render() {
    return (
      <div class="dropdown">
        <button className='dropdown-btn' onClick={this.showMenu}>
          Show menu
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <Link to="/">
                <a href="/home-page" className='dropdown-btn item'> Home Page </a>
                </Link>
                <Link to="/add-item">
                <a className='dropdown-btn item'> Add Item </a>
                </Link>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}




export default Menu;
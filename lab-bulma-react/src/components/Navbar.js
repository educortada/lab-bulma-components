import React, { Component } from 'react';
import classNames from 'classnames';

// Components
import CoolButton from './CoolButton'

class Navbar extends Component {
  render() {
    const classNamesNavbar = classNames({
      'is-active': this.props.isActive,
      'is-black': this.props.isBlack,
      'is-centered': this.props.isCentered,
      'is-danger': this.props.isDanger,
      'is-dark': this.props.isDark,
      'is-focused': this.props.isFocused,
      'is-grouped': this.props.isGrouped,
      'is-hovered': this.props.isHovered,
      'is-info': this.props.isInfo,
      'is-inverted': this.props.isInverted,
      'is-large': this.props.isLarge,
      'is-light': this.props.isLight,
      'is-link': this.props.isLink,
      'is-loading': this.props.isLoading,
      'is-medium': this.props.isMedium,
      'is-outlined': this.props.isOutlined,
      'is-primary': this.props.isPrimary,
      'is-right': this.props.isRight,
      'is-rounded': this.props.isRounded,
      'is-selected': this.props.isSelected,
      'is-small': this.props.isSmall,
      'is-static': this.props.isStatic,
      'is-success': this.props.isSuccess,
      'is-text': this.props.isText,
      'is-warning': this.props.isWarning,
      'is-white': this.props.isWhite,
    })
    return (
      <nav className={`navbar ${classNamesNavbar}`}>
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""/>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io">Home</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <CoolButton button isInfo link="https://bulma.io">Log in</CoolButton>
                <CoolButton button isPrimary link="https://bulma.io"><strong>Sign up</strong></CoolButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

}
export default Navbar;
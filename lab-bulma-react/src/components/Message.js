import React, { Component } from 'react';
import classNames from 'classnames';

class Message extends Component {
  render() {
    const classNamesMessage = classNames({
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
      <article className={`message ${classNamesMessage}`}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete"></button>
        </div>
        <div className="message-body">{this.props.children}</div>
      </article>
    )
  }
}

export default Message;
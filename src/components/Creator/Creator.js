import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Creator.scss';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: 'Add new item',
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0
    });
  }

  handleOK = () => {
    if (this.state.value != '') {
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false
      });
    }
  }

  handleCancel = () => {
    if (window.confirm('Delete the title?')) {
      this.setState({
        value: '',
        visibleButtons: false
      });
    }
  }

  handleInfo = () => {
    if (window.alert('Hit OK to save new title or cancel to clear')) {
    }
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
          <Button onClick={this.handleInfo} variant='info'>Info</Button>
        </div>
      </div>
    );
  }
}

export default Creator;

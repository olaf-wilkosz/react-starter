import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';
import { settings } from '../../data/dataStore';
import styles from './Header.scss';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    prefix: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.header.icon,
    prefix: settings.header.prefix,
  }

  render() {
    const { icon, prefix } = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={icon} prefix={prefix} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
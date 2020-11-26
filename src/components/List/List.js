import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageAddress={this.props.image} />
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
          <Column columns={this.props.columns[0]} />
          <Column columns={this.props.columns[1]} />
          <Column columns={this.props.columns[2]} />
        </div>
      </section>
    )
  }
}

export default List;
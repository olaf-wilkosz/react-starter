import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    children: PropTypes.node,
    columnTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageAddress={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle={this.props.columnTitles[0]} />
          <Column columnTitle={this.props.columnTitles[1]} />
          <Column columnTitle={this.props.columnTitles[2]} />
        </div>
      </section>
    )
  }
}

export default List;
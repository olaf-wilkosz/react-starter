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
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    columns: ['Column1', 'Column2', 'Column3'],
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageAddress={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
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
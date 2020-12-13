import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
// import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import styles from './List.scss';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const { title, image, description, columns } = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/* 
          <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div>
         */}
      </section>
    );
  }
}

export default List;
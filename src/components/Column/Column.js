import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon';
// import { settings } from '../../data/dataStore';
import styles from './Column.scss';

class Column extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/* 
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
         */}
      </section>
    );
  }
}

export default Column;
import React from 'react';
import List from '../List/List';
import Creator from '../Creator/Creator';
import { pageContents, listData } from '../../data/dataStore';
import { settings } from '../../data/dataStore';
import styles from './App.scss';

class App extends React.Component {
  state = {
    listData: this.props.listData || [],
  }

  addList(title) {
    this.setState(state => (
      {
        listData: [
          ...state.listData,
          {
            key: state.listData.length ? state.listData[state.listData.length - 1].key + 1 : 0,
            title,
            image: 'https://images.pexels.com/photos/230744/pexels-photo-230744.jpeg',
            description: [],
            columns: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
        {this.state.listData.map(({ key, ...listDataProps }) => (
          <List key={key} {...listDataProps} />
        ))}
        <Creator text={settings.listCreatorText} image="{settings.defaultImage}" action={title => this.addList(title)} />
      </main>
    )
  }
}

export default App;
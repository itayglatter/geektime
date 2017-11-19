import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View ,StyleSheet} from 'react-native';
import Row from './Row'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default class App extends Component {
    

    constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://www.geektime.co.il/wp-json/wp/v2/posts?per_page=8')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
//<View><Text styles={{paddingTop: 50}}>{rowData.id} -  {rowData.title.rendered}</Text></View>
    return (
      <View style={{flex: 1, paddingTop: 20, }}>
        <ListView style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Row {...rowData} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    );
  }

}
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import Carousel from './carousel';

const { width } = Dimensions.get('window');

const data = [
  { backgroundColor: 'red' },
  { backgroundColor: 'green' },
  { backgroundColor: 'blue' },
  { backgroundColor: 'yellow' }
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  carousel: {
    height: 500,
    width: width,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'orange'
  },
  item: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 100,
    fontWeight: 'bold'
  }
});

export default class App extends Component {
  renderItem = ({ item, index }) => {
    const { backgroundColor } = item;
    return (
      <TouchableOpacity
        style={[styles.item, { backgroundColor }]}
        onPress={() => {
          this._carousel.scrollToIndex(index);
          //console.log(this._carousel);
        }}
      >
        <Text style={styles.text}>{index.toString()}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          style={styles.carousel}
          data={data}
          renderItem={this.renderItem}
          itemWidth={250}
          containerWidth={width}
          //pagingEnable={false}
          separatorWidth={20}
          ref={(c) => {
            this._carousel = c;
          }}
        />
      </View>
    );
  }
}

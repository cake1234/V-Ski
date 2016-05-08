'use strict';
var React = require('react-native');
const { View, TouchableHighlight, Text, StyleSheet,AlertIOS,Component } = React;


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: 'transparent',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 30,
      paddingRight: 30,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 1,
  },
  liText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})
class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.ligne}</Text>
        <Text style={styles.liText}>{this.props.item.station}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;

'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component
} = React;
 
var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#162534',
  }
});
 
class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search
        </Text>
      </View>
    );
  }
}
 
module.exports = Search;
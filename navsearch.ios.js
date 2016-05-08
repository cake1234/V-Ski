'use strict';
var React = require('react-native');
var Search = require('./search.ios');

var {
    StyleSheet,
    NavigatorIOS,
  Component
} = React;

var styles =StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});



    class Navsearch extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Vski',
          component: Search,
        }}/>
    );
  }
}
module.exports = Navsearch;
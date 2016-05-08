'use strict';
var React = require('react-native');
var Home = require('./home.ios');

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



    class Navhome extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Vski',
          component: Home,
        }}/>
    );
  }
}
module.exports = Navhome;
'use strict';
var React = require('react-native');
var Clock = require('./clock.ios');

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



    class Navclock extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Vski',
          component: Clock,
        }}/>
    );
  }
}
module.exports = Navclock;
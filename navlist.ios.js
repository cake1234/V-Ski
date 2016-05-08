'use strict';
var React = require('react-native');
var List = require('./list.ios');

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



    class Navlist extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Mes RER',
          component: List,
        }}/>
    );
  }
}
module.exports = Navlist;
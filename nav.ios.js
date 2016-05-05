'use strict';
var React = require('react-native');
var Clock = require('./clock.ios');

var styles = React.StyleSheet.create({
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

    class Nav extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Vski',
          component: Clock,
        }}/>
    );
  }
}
module.exports = Nav;

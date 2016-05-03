'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;
 
var styles = StyleSheet.create({
  description: {
    fontSize: 20,
      marginBottom: 20,
    textAlign: 'left',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
       padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
    flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
},
button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flex: 2,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC'
}
});
 
class Clock extends Component {
  render() {
    return (
        
        <View style={styles.flowRight}>
  
  <TouchableHighlight style={styles.button}
      underlayColor='#99d9f4'>
    <Text style={styles.buttonText}>Go</Text>
  </TouchableHighlight>
</View>
      
    );
  }
}
 
module.exports = Clock;

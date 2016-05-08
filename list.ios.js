'use strict';
 
var React = require('react-native');
var Firebase=require('firebase');
var ListItem = require('./listitem.ios');
var {
  StyleSheet,
  View,
  Text,
     ListView,
    AppRegistry,
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
    backgroundColor: '#123456',
  }
});
 
class List extends Component {
    
    constructor(props) {
  super(props);
        
         var myFirebaseRef = new Firebase('https://vski.firebaseio.com');
  this.itemsRef = myFirebaseRef.child('marin');
        
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  };
}
    
    
    
    listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          ligne: child.val().ligne,
            station: child.val().station,
          _key: child.key()
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }
    
    _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    );
  }
  
    componentDidMount() {
     this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.container}>
        
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}/>
        
      </View>
    );
  }
}

module.exports = List;

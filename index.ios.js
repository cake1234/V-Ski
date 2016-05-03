'use strict';

var React = require('react-native');
var Home = require('./home.ios');
var Clock = require('./clock.ios');
var Search = require('./search.ios');
var List = require('./list.ios');


var {
  AppRegistry,
  TabBarIOS,
    TabBarNavigator,
  Component
} = React;



class devdactic_tabs extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
    render() {
    return (
        
      <TabBarIOS selectedTab={this.state.selectedTab}>
        
        <TabBarIOS.Item
        icon={require('./home.png')}
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
              this.setState({
                  selectedTab: 'home',
              });
          }}>
            <Home/>
        </TabBarIOS.Item>
          
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'clock'}
          icon={require('./clock.png')}
          onPress={() => {
                this.setState({
                    selectedTab: 'clock',
                });
          }}>
          <Clock/>
            </TabBarIOS.Item>
              
              <TabBarIOS.Item
        icon={require('./search.png')}
          selected={this.state.selectedTab === 'search'}
          onPress={() => {
              this.setState({
                  selectedTab: 'search',
              });
          }}>
            <Search/>
        </TabBarIOS.Item>
          
            <TabBarIOS.Item
        icon={require('./list.png')}
          selected={this.state.selectedTab === 'list'}
          onPress={() => {
              this.setState({
                  selectedTab: 'list',
              });
          }}>
            <List/>
        </TabBarIOS.Item>
          
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('devdactic_tabs', () => devdactic_tabs);

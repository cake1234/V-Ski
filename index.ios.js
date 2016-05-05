var React = require('react-native');
var Home = require('./home.ios');
var Nav= require('./nav.ios');
var Search = require('./search.ios');
var List = require('./list.ios');
var Firebase = require('firebase');


var {
  AppRegistry,
  TabBarIOS,
    TabBarNavigator,
  Component
} = React;



class Vski extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'nav'
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
          selected={this.state.selectedTab === 'nav'}
          icon={require('./clock.png')}
          onPress={() => {
                this.setState({
                    selectedTab: 'nav',
                });
          }}>
          <Nav/>
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

AppRegistry.registerComponent('Vski', () => Vski);

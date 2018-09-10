import React from 'react';
import { Text, View, Platform, Image, ImageBackground, } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';


export default class App extends React.Component {
  state = {
    currentScreen: "landing"
    }
    //Switches current screen state to whichever screen you are currently one
  switchScreen = (currentScreen) => {
    this.setState({currentScreen});
  }
  renderScreen = () => {
    if(this.state.currentScreen === "landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === "search"){
      return(
        <Search />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
       {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,
  }
}
  

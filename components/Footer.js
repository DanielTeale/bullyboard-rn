import React, { Component } from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

class Footer extends Component {
  state = {  }
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Bullys"
          onPress={() => navigate("Home")}
        />
        <Button
          style={styles.button}
          title="Profile"
          onPress={() => navigate("Profile")}
        />
        <Button
          style={styles.button}
          title="Organisations"
          onPress={() => navigate("Organisation")}
        />
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'row'
  },
  button: {
    backgroundColor: "skyblue"
  }
})
export default Footer;
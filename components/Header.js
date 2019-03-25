import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => {
  return (
    <>
      <View style={styles.container} >
        <Text style={styles.text}>BullyBoard</Text>
      </View>
    </>
  )
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    margin: 0,
    // flex: 1,
    // height: 50
  },
  text: {
    textAlign: "center",
    color: "white",
    marginTop: 20,
    fontSize: 24,
    marginBottom: 15,
  }
});

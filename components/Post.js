import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Post = (props) => {
  const {content, title} = props
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          {title}
        </Text>
      {/* </View> */}
      {/* <View style={styles.contentContainer}> */}
        <Text style={styles.contentText}>
          {content}
        </Text>
      </View>
    </>
  )
};

export default Post;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 5,
  },
  titleText: {
    fontSize: 20,
    textAlign: "center",
  },
  contentContainer: {
    flex: 2
  },
  contentText: {
    fontSize: 14,
  }
});

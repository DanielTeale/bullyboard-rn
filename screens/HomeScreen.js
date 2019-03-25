import React, {Component} from "react";
import {connect} from 'react-redux';
import {getPosts} from '../actions/postAction'
import { StyleSheet, Text, View, Button } from "react-native";
import Post from '../components/Post'
import Footer from "../components/Footer";

class HomeScreen extends Component {
  componentDidMount = async() => {
    await this.props.getPosts();
  }

  render () {
    // const {posts} = this.props;
    // const { navigate } = this.props.navigation
    // const postList = this.props.posts.map((postItem) => {
    //   <Post title={postItem.title} content={postItem.content} key={postItem._id} />
    // })

    return (
      <>
        <Text>{JSON.stringify(this.props.posts[0]['title'])}</Text>
        {/* {this.props.posts.map((postItem) => { */}
        {/* <Post title={this.props.posts[0]['title']} content={this.props.posts[0]['content']} key={this.props.posts[0]['_id']} /> */}
          
        {/* })} */}
        {/* <Post /> */}
        {/* <postList /> */}
        {/* <Footer /> */}
        {/* <Post />
        <Post /> */}
        {/* <View style={styles.container}>
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
        </View> */}
      </>
    )
  };
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps, {getPosts})(HomeScreen);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row"
  },
  button: {
    backgroundColor: "skyblue"
  }
}); 
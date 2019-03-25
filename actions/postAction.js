import axios from 'axios'

export const getPosts = () => {
  return async (dispatch) => {
    let response = await axios.get('http://localhost:3000/post');
    // console.log(response)
    dispatch({
      type: "GET_POST",
      payload: response.data
    });
  }
}
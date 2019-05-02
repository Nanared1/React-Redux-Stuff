import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCHED_POSTS",
    payload: response.data
  });
};

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: "FETCHED_USER",
    payload: response.data
  });
});

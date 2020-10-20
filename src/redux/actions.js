import fetchComments from "./fetch/comments/fetchComments";
import fetchPosts from "./fetch/post/fetchPosts";

export const setPosts = content => ({
  type: 'SET_POSTS',
  payload: {
    content,
  },
});

export const setTitle = (content, i) => ({
  type: 'SET_TITLE',
  payload: {
    content,
    i,
  },

})

export const setBody = (content, i) => ({
  type: 'SET_BODY',
  payload: {
    content,
    i
  },
})

export const setPostsViaThunk = () => {
  return dispatch => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }
}

export const setComments = (comments) => ({
  type: 'SET_COMMENTS',
  payload: {
    comments
  },
})

export const setData = content => ({
  type: 'SET_DATA',
  payload: {
    content,
  },
})

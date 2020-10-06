
export const setPosts = content => ({
  type: 'SET_POSTS',
  payload: {
    content,
  },

})

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

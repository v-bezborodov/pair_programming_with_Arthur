const initialState = {
    posts: []
}

export function apiReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload.content,
            }
        case 'SET_TITLE':
            var value = [...state.posts]
            value[action.payload.i].title = action.payload.content
            return {
                ...state,
                posts: value,
            }
        case 'SET_BODY':
            var value = [...state.posts]
            value[action.payload.i].body = action.payload.content
            return {
                ...state,
                posts: value,
            }
        default:
            return state
    }

}






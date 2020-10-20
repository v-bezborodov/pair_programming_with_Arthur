const initialState = {
    posts: [],
    comments: []
}

export function apiReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload.content,
            }
        case 'SET_TITLE':
            let valueTitle = [...state.posts]
            valueTitle[action.payload.i].title = action.payload.content
            return {
                ...state,
                posts: valueTitle,
            }
        case 'SET_BODY':
            let valueBody = [...state.posts]
            valueBody[action.payload.i].body = action.payload.content
            return {
                ...state,
                posts: valueBody,
            }

        case 'SET_СOMMENTS':
            return {
                ...state,
                comments: action.payload.content,
            }

        case 'SET_DATA':
            return {
                ...state,
                posts: action.payload.content.posts ? action.payload.content.posts: state.posts,
                comments: action.payload.content.comments ? action.payload.content.comments: state.posts.comments
            }
        default:
            return state
    }

}






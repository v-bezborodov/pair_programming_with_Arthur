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
        default:
            return state
    }

}






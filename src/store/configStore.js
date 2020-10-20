import { createStore , applyMiddleware, compose} from 'redux'
import { rootReducer } from '../redux/reducer'
import thunk from 'redux-thunk';

// export const store = createStore(rootReducer, applyMiddleware(thunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));


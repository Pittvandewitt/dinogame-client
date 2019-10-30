import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'
import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)

const persistedState = loadState();
const store = createStore(reducer, persistedState, enhancer)

store.subscribe(() => {
  saveState({ player: store.getState().player });
});

export default store
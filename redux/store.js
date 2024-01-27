import {createStore} from 'redux';
import rootReducer from './reducers/inde';

const store = createStore(rootReducer);

export default store;

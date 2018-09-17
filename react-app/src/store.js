import {createStore} from 'redux';
import reducer from './reducer.js';

const initialState={
    count:5
};
const store = createStore(reducer,initialState)
export default store;
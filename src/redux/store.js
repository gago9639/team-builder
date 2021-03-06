import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';
import  user from './reducers/user';
import  topics from './reducers/topics';
import  projects from './reducers/projects';
import  teams from './reducers/teams';

const teamBuilder = combineReducers({user, topics, projects, teams});
const store = createStore(teamBuilder, applyMiddleware(thunk));

export default store;
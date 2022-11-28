import { combineReducers } from 'redux';

import topics from './topics';
import topic from './topic';
import auth from './auth';
import modal from './modal';
import sets from './sets';
import set from './set';
import cards from './cards';
import favourites from './favourites';

export default combineReducers({ topics, topic, auth, modal, sets, set, cards, favourites });
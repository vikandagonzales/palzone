import {
  GET_LOCATIONS,
  GET_LANGUAGES,
  POST_TRANSLATION
} from '../actions/main';

let initialState = {
  locations: [],
  languages: [],
  translation: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {...state, locations: action.payload};
    case GET_LANGUAGES:
      return {...state, languages: action.payload};
    case POST_TRANSLATION:
      return {...state, translation: action.payload};
    default:
      return state;
  }
};
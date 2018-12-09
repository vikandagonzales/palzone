import Main from '../models/main';

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_LANGUAGES = 'GET_LANGUAGES';
export const POST_TRANSLATION = 'POST_TRANSLATION';

export const getLocations = () => {
  return async dispatch => {
    const payload = await Main.getLocations();
    dispatch({type: GET_LOCATIONS, payload});
  };
};

export const getLanguages = () => {
  return async dispatch => {
    const payload = await Main.getLanguages();
    dispatch({type: GET_LANGUAGES, payload});
  };
};

export const postTranslation = () => {
  return async dispatch => {
    const payload = await Main.postTranslation();
    dispatch({type: POST_TRANSLATION, payload});
  };
};
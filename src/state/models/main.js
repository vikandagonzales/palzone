import request from '../../helpers/request';

class Main {
  static getLocations = async () => {
    const response = await request(`/locations?lat=34&lng=-118`);
    return response.data.data;
  };

  static getLanguages = async () => {
    const response = await request(`/translate`);
    const languages = Object.keys(response.data.response);
    return languages;
  };

  static postTranslation = async (text, language) => {
    const languages = Main.getLanguages();
    console.log(languages.language)
    // await request(`/translate`, 'post', {text, language: languages.language});
    // return response;
  };

};

export default Main;

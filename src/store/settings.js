/* eslint-disable no-unused-vars, max-len */
const settings = {
  state: {
    pageBgColor: 'white',
    settings: null,
    appLoaded: false,
  },
  mutations: {
    colorScheme(state, payload) {
      state.pageBgColor = payload.data;
    },
    updateSettings(state, payload) {
      state.settings = payload.data;
    },
    initDataLoaded(state, payload) {
      state.appLoaded = payload;
    },
  },
  getters: {
    getPageThemeColor: (state) => () => state.pageBgColor,
  },
  actions: {
    /*  async fetchSettings({ dispatch, commit }) {
      await fetch(`${process.env.SOME_PATH}/settings`)
        .then((res) => res.json())
        .then((json) => {
          commit('updateSettings', { data: json });
        })
        .catch((error) => {
          console.error('Error fetching settings:', error);
        });
    },  */
  },
};

export default settings;

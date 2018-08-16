import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexcolor:'rgb(33,150,243)',
    indextitle:'movie',
  },
  mutations: {
    changecolor(state,menu){
      state.indexcolor=menu.bgColor;
      state.indextitle=menu.name;
    }
  },
  actions: {
    changecolor({commit},menu){
      commit('changecolor',menu)
    }
  },
});

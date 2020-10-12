import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 export default new Vuex.Store({
  state: {
    count: 2,
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    tripleCount(state) {
      return state.count * 3;
    }
  }
});

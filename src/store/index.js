import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    getInfo(state) {
      if (localStorage.notes) state.notes = localStorage.notes;
    },
    createNote(state, note) {
      state.notes.push(note);
      localStorage.notes = state.notes;
    }
  },
  state: {
    notes: [
      {
        id: 1,
        title: "Создаем свой блог на Vue.js",
        smallDescr: "n4wioe gnoiern gwrgroeing rewi g nireg nierngi nrw",
        comments: [{}, {}]
      },
      {
        id: 2,
        title: "Создаем свой блог на Vue.js",
        smallDescr: "n4wioe gnoiern gwrgroeing rewi g nireg nierngi nrw",
        comments: [{}, {}]
      }
    ]
  }
});

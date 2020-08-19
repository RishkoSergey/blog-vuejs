/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    getInfo(state) {
      if (localStorage.notes)
        state.notes = JSON.parse(localStorage.getItem("notes"));
    },
    createNote(state, note) {
      note.id = state.notes.length === 0
        ? 1
        : state.notes[state.notes.length - 1].id + 1;
      note.comments = [];
      state.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    addComment(state, comment) {
      const noteWithComment = state.notes.find(
        note => note.id == comment.noteId
      );
      comment.id = noteWithComment.comments.length === 0
        ? 1
        : noteWithComment.comments[noteWithComment.comments.length - 1].id + 1;
      noteWithComment.comments.push(comment);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    }
  },
  state: {
    notes: []
  }
});

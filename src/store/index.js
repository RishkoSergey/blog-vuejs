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
    },
    editNote(state, note) {
      const editedNote = state.notes.find(item => item.id == note.id);
      editedNote.title = note.title;
      editedNote.smallDescr = note.smallDescr;
      editedNote.fullDescr = note.fullDescr;
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote(state, id) {
      const index = state.notes.findIndex(item => item.id == id);
      state.notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteComment(state, comment) {
      const note = state.notes.find(item => item.id == comment.noteId);
      const index = note.comments.findIndex(item => item.id == comment.id);
      note.comments.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    }
  },
  state: {
    notes: []
  }
});

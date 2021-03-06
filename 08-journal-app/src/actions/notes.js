import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { loadNotes } from '../helpers/loadNotes';
import { uploadFile } from '../helpers/uploadFile';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    try {
      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
      dispatch(refresNote(note.id, note));
      Swal.fire('Saved', note.title, 'success');
    } catch (error) {
      console.log(error);
      Swal.fire('NotSaved', note.title, 'error');
    }
  };
};

export const refresNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note,
  },
});

export const startUploadingPicture = (file) => {
  return async (dispatch, getState) => {
    const { active: note } = getState().notes;

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await uploadFile(file);
    note.url = fileUrl;

    dispatch(startSaveNote(note));
    Swal.close();
  };
};

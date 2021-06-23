import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    //Este dispatch es del thunk
    try {
      dispatch(startLoading());
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.displayName));
      dispatch(finishLoading());
    } catch (e) {
      console.log(e);
      dispatch(finishLoading());
    }
  };
};

//Con promesa
// export const startGoogleLogin = () => {
//   return (dispatch) => {
//     firebase
//       .auth()
//       .signInWithPopup(googleAuthProvider)
//       .then(({ user }) => {
//         dispatch(login(user.uid, user.displayName));
//       });
//   };
// };

//Con async await
export const startGoogleLogin = () => {
  return async (dispatch) => {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    dispatch(login(user.uid, user.displayName));
  };
};

//Con promesa
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

//Con async await
// export const startRegisterWithEmailPasswordName = (email, password, name) => {
//   return async (dispatch) => {
//     try {
//       const { user } = await firebase
//         .auth()
//         .createUserWithEmailAndPassword(email, password);

//       await user.updateProfile({ displayName: name });
//       dispatch(login(user.uid, user.displayName));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});

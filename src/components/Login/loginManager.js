import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

export const initializeLoginFramework = () => {
  if (firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleCreateWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      updateCurrentUserInfo(name);
      const newUser = {
        name: name,
        email: email,
      };
      return newUser;
    })
    .catch((error) => {
      return error.message;
    });
};

export const handleSignInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = {
        name: res.user.displayName,
        email: res.user.email,
      };
      return newUser;
    })
    .catch(function (error) {
      return error.message;
    });
};

export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(function () {
      const newUser = {
        name: "",
        email: "",
      };
      return newUser;
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};

const updateCurrentUserInfo = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(() => {
      // Update successful.
      console.log("Update Succesful");
    })
    .catch(function (error) {
      // An error happened.
      console.log("Update failed");
    });
};

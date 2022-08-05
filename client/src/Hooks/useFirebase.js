import initializedFirebase from "../Components/Auth/Firebase/firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getIdToken,
  updateProfile,
} from "firebase/auth";

//Initailized Firebase Auth
initializedFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [moderator, setModerator] = useState(false);
  const [authToken, setAuthToken] = useState("");

  const auth = getAuth();

  //LogIn User Using Email
  const createNewUser = (name, email, password, vid, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);

        // Send User to Backend
        saveUserData(email, name, vid);

        // Must set display name
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigate("/dashboard");
      })

      .catch((error) => {
        // const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //SignIn User With Password
  const signIn = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //For Location and  Navigate
        const destination = location?.state?.from || "/dashboard";
        navigate(destination);

        // To Clear AuthError
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //Monitoring User For Various Browser
  useEffect(() => {
    const unSubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setAuthToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubcribed;
  }, [auth]);

  // To Control Admin Role bsed actions
  useEffect(() => {
    fetch(`https://vsportsg.herokuapp.com/api/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.admin) {
          setAdmin(true);
        }
        if (data.moderator) {
          setModerator(true);
        }
      });
  }, [user.email]);

  //SignOut User
  const logOut = (location, navigate) => {
    setIsLoading(false);

    signOut(auth)
      .then(() => {
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveUserData = (email, displayName, vid) => {
    const user = { email, displayName, vid };

    fetch("https://vsportsg.herokuapp.com/api/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    moderator,
    isLoading,
    createNewUser,
    authError,
    authToken,
    signIn,
    logOut,
  };
};

export default useFirebase;

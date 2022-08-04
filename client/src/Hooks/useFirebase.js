import initializedFirebase from "../Components/Auth/Firebase/firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

  const auth = getAuth();

  //LogIn User Using Email
  const createNewUser = (name, email, password, vid, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name, vid };
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
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubcribed;
  }, [auth]);

  // To Control Role bsed actions
  useEffect(() => {
    fetch(`http://localhost:5000//api/users/${user.vid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.admin) {
          setAdmin(data.admin);
        }

        if (data.moderator) {
          setModerator(data.moderator);
        }
      });
  }, [user.vid]);

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

    fetch("http://localhost:5000/api/user", {
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
    signIn,
    logOut,
  };
};

export default useFirebase;

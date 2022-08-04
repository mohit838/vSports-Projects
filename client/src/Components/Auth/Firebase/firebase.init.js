import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializedFireBase = () => {
  initializeApp(firebaseConfig);
};

export default initializedFireBase;

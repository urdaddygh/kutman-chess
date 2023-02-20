import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

//you can either add your firebase config directly like in the tutorial or can also add it as an 
//json string like here https://create-react-app.dev/docs/adding-custom-environment-variables/
const firebaseConfig = {
  apiKey: "AIzaSyDRIDRLyjDfLeap2ftmW9ibRgD-OHeezgA",
  authDomain: "kutman-chess-react.firebaseapp.com",
  projectId: "kutman-chess-react",
  storageBucket: "kutman-chess-react.appspot.com",
  messagingSenderId: "1028011715885",
  appId: "1:1028011715885:web:0d41c2a5e1a7cda8e7b7a4"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase
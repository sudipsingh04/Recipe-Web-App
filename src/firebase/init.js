import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDH8Ij-27AXIuD-HsI_YBe7XelwG6vbU5I",
  authDomain: "sudip-vue-crud.firebaseapp.com",
  databaseURL: "https://sudip-vue-crud.firebaseio.com",
  projectId: "sudip-vue-crud",
  storageBucket: "sudip-vue-crud.appspot.com",
  messagingSenderId: "89707602718",
  appId: "1:89707602718:web:59e57ebcaab02a074d5f0f",
  measurementId: "G-S0Z7JZ96S1"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();

// Export firestore database
export default firebaseApp.firestore()

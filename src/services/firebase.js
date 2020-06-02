import firebase from 'firebase/app'
import 'firebase/auth' 
import 'firebase/firestore' 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi5YGARDWHO-iBucHkXhSbzEJJhMxcsyQ",
    authDomain: "ordersystem-3ddd7.firebaseapp.com",
    databaseURL: "https://ordersystem-3ddd7.firebaseio.com",
    projectId: "ordersystem-3ddd7",
    storageBucket: "ordersystem-3ddd7.appspot.com",
    messagingSenderId: "807840657438",
    appId: "1:807840657438:web:d93f7f8e095c3ebf4dfe0f"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

 export const auth = firebase.auth()
 export const db = firebase.firestore()

  export default firebase
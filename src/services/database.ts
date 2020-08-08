import firebase from 'firebase';
import 'firebase/firestore';
import * as config from '../config/firebaseConfig';

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}else{
  firebase.app();
}
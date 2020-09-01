import firebase from 'firebase';
import 'firebase/firestore';
import * as config from './config/firebaseConfig';

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app() 
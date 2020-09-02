import firebase from 'firebase';
import 'firebase/firestore';
import { config } from './config/firebaseConfig';

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app() 
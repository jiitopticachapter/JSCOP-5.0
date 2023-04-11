import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCzeAh845T-DKrGHQsOOPV-W1gs15OGntw",
  authDomain: "jscop-5-0.firebaseapp.com",
  projectId: "jscop-5-0",
  storageBucket: "jscop-5-0.appspot.com",
  messagingSenderId: "997597192566",
  appId: "1:997597192566:web:5f95ef26db97494961da57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);

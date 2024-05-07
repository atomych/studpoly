import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAllesUfMVm1IMHWcLfe0VBFnhqjVUjE6M",
  authDomain: "studpoly.firebaseapp.com",
  projectId: "studpoly",
  storageBucket: "studpoly.appspot.com",
  messagingSenderId: "651949429956",
  appId: "1:651949429956:web:bf790303888dc3daa7a591",
};

const app = initializeApp(firebaseConfig);
export { app, firebaseConfig };

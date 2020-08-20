import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx_NEYNnsOFkjR6JvZCRqmnNHuBOTK3ag",
  authDomain: "pinkgames-6c6ae.firebaseapp.com",
  databaseURL: "https://pinkgames-6c6ae.firebaseio.com",
  projectId: "pinkgames-6c6ae",
  storageBucket: "pinkgames-6c6ae.appspot.com",
  messagingSenderId: "41749180784",
  appId: "1:41749180784:web:acb1d22931a33d2d67dfb5",
  measurementId: "G-PVRS9N1T9F"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("app"));

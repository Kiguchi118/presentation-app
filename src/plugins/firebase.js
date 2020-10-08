import Vue from "vue";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(firestorePlugin);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDmR4ES-WhJKvAFJXVIrJ3gHmGJeYV6L0M",
  authDomain: "presentation-vue-app.firebaseapp.com",
  databaseURL: "https://presentation-vue-app.firebaseio.com",
  projectId: "presentation-vue-app",
  storageBucket: "presentation-vue-app.appspot.com",
  messagingSenderId: "269594692206",
  appId: "1:269594692206:web:c55f812b7b491d9f0fb47f",
  measurementId: "G-0740ELQ3XJ",
});

export const db = firebaseApp.firestore();

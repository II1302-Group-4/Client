// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";

const fbConfig = {
    apiKey: "AIzaSyA4DZ4nGUWqOx7pMtYIMQid-H-7TBpeqSo",
    authDomain: "pollusense-3c51b.firebaseapp.com",
    projectId: "pollusense-3c51b",
    storageBucket: "pollusense-3c51b.appspot.com",
    messagingSenderId: "514369000464",
    appId: "1:514369000464:web:3070202934e8915f13e695"
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
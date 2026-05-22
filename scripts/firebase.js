import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
getDatabase
}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";

const firebaseConfig = {

apiKey: "AIzaSyBzMS3vAgZbvDpMoKGbALPcBl_oBIayDfc",

authDomain: "ts-quiz-live.firebaseapp.com",

databaseURL: "https://ts-quiz-live-default-rtdb.firebaseio.com",

projectId: "ts-quiz-live",

storageBucket: "ts-quiz-live.firebasestorage.app",

messagingSenderId: "1008762047515",

appId: "1:1008762047515:web:d848a84da0ef965ce1fcbe",

measurementId: "G-MZENY9GPQ7"

};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
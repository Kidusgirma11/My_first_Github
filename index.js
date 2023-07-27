const express = require('express');
const functions  = require('firebase-functions');
const admin = require('firebase-admin');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const app = express();

admin.initializeApp({

  apiKey: "AIzaSyDDKqBOdP_4rIh6AWOx57DbCj-9Dkdn2sg",

  authDomain: "syching-464f7.firebaseapp.com",

  projectId: "syching-464f7",

  storageBucket: "syching-464f7.appspot.com",

  messagingSenderId: "323823901116",

  appId: "1:323823901116:web:0dd0dcb82b526f358533b9"

});

const db = getFirestore();
app.get('/users/:uid',(req,res)=>{
  let myparam = req.params.uid;
  let busRef = db.collection("users").doc(myparam);
      let ary;
      async function hero()  {const doc = await busRef.get();
        if (!doc.exists) {
        
        console.log('No such document! '+ myparam);
        res.send('No such document! '+ myparam);
          
        } else {
          //recived = doc.data().capitalof;
          console.log('Document data:', doc.data());
         
          res.send('user: '+ doc.data());
          //res.render('pages/home', {discription: ary.discription});
        }
        }
      hero();
});
exports.app = functions.https.onRequest(app);

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const Api = {
  getPosts: async (postId:any) => {
    let list = <any>[];
    let results = await db.collection("posts").get();
    results.forEach(async (result) => {
      let data = result.data();
      if(postId !== undefined) {
        if(result.id === postId){
          list.push({
              id: result.id,
              title: data.title,
              image: data.image,
              description: data.description.replaceAll('\\n', '\n')
          });
        }
      } else {
        list.push({
          id: result.id,
          title: data.title,
          image: data.image,
          description: data.description
        });
      }
    });
    return list;
  }
};

export default Api;

import app from 'firebase/app';

var config = {
    apiKey: "AIzaSyAnYMEOS1Mo-YDycux_qoDDho9Dag61YPQ",
    authDomain: "fileupload-c90d9.firebaseapp.com",
    databaseURL: "https://fileupload-c90d9.firebaseio.com",
    projectId: "fileupload-c90d9",
    storageBucket: "fileupload-c90d9.appspot.com",
    messagingSenderId: "339371479614"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  
  export default Firebase;
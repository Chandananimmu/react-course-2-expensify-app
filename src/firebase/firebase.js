import * as firebase from "firebase";



const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
export {firebase,googleAuthProvider,database as default };
// database.ref('expenses').on('child_added',(snapshot)=>{
//          console.log(snapshot.val());
//     });


































































































// // database.ref('expenses').on('child_removed',(snapshot)=>{
// //   console.log(snapshot.key,snapshot.val());
// // });
// // database.ref('expenses/-LJOcQlAnnpHe9kM996Q').remove().then(()=>{
// //    console.log('age removed')
// //  }).catch(()=>{
// //    console.log("age nt removed")
// //  })
// //database.ref('expenses').on('child_changed',(snapshot)=>{
// //   console.log(snapshot.key,snapshot.val());
// // });
// // setTimeout(()=>{
// //  database.ref('expenses/-LJOcQlFQAk5tPbJMWIH').update({
// //        amount:35346,
// //        description:"Rent",
// //    note:"cleared",
// //     createdAt:1212017
// //      });
// //     },3500)
// //      database.ref('expenses').on('child_changed',(snapshot)=>{
// //       console.log(snapshot.key,snapshot.val());
// //     });
//     database.ref('expenses').on('child_added',(snapshot)=>{
//       console.log(snapshot.key,snapshot.val());
//     });
//     setTimeout(()=>{
//     database.ref('expenses').push({
//   description:"food bill",
//   note:"cleared",
//   amount:545570,
//   createdAt:8912017
// });
// },3500)
// //   database.ref('expenses').on('value',(snapshot)=>{
// //   const val=snapshot.val();
// //   console.log(val);
// //  });

// // database
// //   .ref("expenses")
// //   .on("value",(snapshot)=>{
// //     const expenses = [];
// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //     });
  
// //  setTimeout(()=>{
// //    database.ref('expenses/-LJOcQlAnnpHe9kM996Q').update({
// //      amount:78467,
// //      description:"Rent",
// //   note:"cleared",
// //   createdAt:1212017
// //    });
// //  },3500)

// // setTimeout(()=>{
// //   database.ref('expenses/-LJOcQlAnnpHe9kM996Q').update({
// //     amount:70000000
// //   });
// //  },9000)











//   //   const expenses = [];
//   //   snapshot.forEach(childSnapshot => {
//   //     expenses.push({
//   //       id: childSnapshot.key,
//   //       ...childSnapshot.val()
//   //     });
//   //   });
//   //   console.log(expenses);
//   // });
// // database.ref('expenses/-LJOcQlAnnpHe9kM996Q').update({
// //   amount: "22222",
 
// // });
// // database.ref('expenses/-LJOcQlAnnpHe9kM996Q').update({
// //   amount: 90222

// // });
// // database.ref('expenses').on('value',(snapshot)=>{
// //   const val=snapshot.val();
// //  console.log(val);
// // });
// // database.ref('expenses').push({
// //   description:"Rent",
// //   note:"cleared",
// //   amount:3000,
// //   createdAt:1212017
// // });

// // database.ref('expenses').push({
// //   description:"gas bill",
// //   note:"cleared",
// //   amount:300,
// //   createdAt:1312017
// // });

// // database.ref('expenses').push({
// //   description:"water bill",
// //   note:"cleared",
// //   amount:3780,
// //   createdAt:1412017
// // });

// // database.ref('expenses').remove().then(()=>{
// //   console.log('age removed')
// // }).catch(()=>{
// //   console.log("age nt removed")
// // })

// // database.ref('notes/-LJNwyUSjMvOt1MkjY4L').update({

// //   body:"walk"
// // });

// // const notes=[{
// //   id:'1',
// //   title:"react",
// //   course:"udemy",
// //   field:"frontend"
// // },{
// //   id:'2',
// //   title:"node",
// //   course:"udemy",
// //   field:"backend"
// // }]
// // database.ref('notes').set(notes);

// // database.ref().set({
// //   name: "frf",
// //   age: 23,
// //   location:{
// //     city:"mys",
// //     street:"mg road"
// //   }
// // }).then(()=>{
// // console.log("data is saved")
// // }).catch((e)=>{
// //   console.log("this failed",e);
// // }
// // );
// // database.ref('age').set(30);
// // database.ref('location/city').set('ngd');
// // database.ref('attributes').set({
// //   height:5.4,
// //   gender:"female"
// // }).then(()=>{
// //   console.log("data updated");
// // }).catch((e)=>{
// //   console.log("this updation failed",e);
// // }
// // );
// // console.log("data changed");

// //database.ref().set({"name":"andrew"})

// // database.ref().on('value',(snapshot)=>{
// //   const val=snapshot.val();
// //   console.log(val);
// // });

// // database.ref().update({name:'chandu'});
// // setTimeout(()=>{
// //   database.ref('age').set(21);
// // },3500)
// // setTimeout(()=>{
// //   database.ref().off();
// // },7000)
// // setTimeout(()=>{
// //   database.ref('age').set(24);
// // },9000)

// // database.ref('location/city').once('value').then((snapshot)=>{
// //   const val=snapshot.val();
// //   console.log(val);
// // }).catch((e)=>{
// // console.log("error in fectching",e);
// // });

// // database.ref().once('value').then((snapshot)=>{
// //   const val=snapshot.val();
// //   console.log(`${val.name} is ${val.age} years old`);
// // }).catch((e)=>{
// // console.log("error in fectching",e);
// // });

// // database.ref('age').remove().then(()=>{
// //   console.log('age removed')
// // }).catch(()=>{
// //   console.log("age nt removed")
// // })

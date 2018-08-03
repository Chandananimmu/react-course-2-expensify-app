const book={
  title:"Ego is the enemy",
  author:"Ryan",
  publisher:{
    name:"Penguin"
  }
}
const {name:publisher='Self-published'}=book.publisher;
console.log(`${publisher}`);


const rate=['coffee (cold)','$2.00','$2.60','$2.75']
const [type,min,med,max]=rate;
console.log(`A med ${type} costs ${med}` );
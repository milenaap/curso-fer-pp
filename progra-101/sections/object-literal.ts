

export let person = {
   name: 'Milena',
   age: 41,
   isActive: true,
   hobbies: ['gym', 'baseball'],
   toString() {
      let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
      console.log(objectString);
   }
}


// console.log(person.name.toUpperCase());

// person.toString();

let car = {
   doors: 5,
   brand: 'Honda',
   color: 'White',
   year: 2025,
   gearBox: 'manual'

}


let smartTv = {
   sizeInches: 90,
   brand: 'Samsung',
   year: 2015,
   type: 'Led'
}

let youtubeVideo = {
   lengthMin: 1.5,
   author: 'Milena Aguilar',
   comments: ['Buen video', 'Me gustó mucho', 'El peor video de todos'],
   likes: 1500,
   dislikes: 100,

}


console.log(car);
console.log(smartTv);
console.log(youtubeVideo);


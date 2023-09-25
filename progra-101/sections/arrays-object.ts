export interface Person {
   name: string;
   age: number;
   isActive: boolean;
}



let milena: Person = {
   name: 'Milena',
   age: 41,
   isActive: true
};



let dorian: Person = {
   name: 'Dorian',
   age: 39,
   isActive: false
};

let dilan: Person = {
   name: 'Dilan',
   age: 10,
   isActive: true
}



let peoples = [milena, dorian, dilan];

console.log(peoples);


// en el for la estructura siempre empieza en let i = y la i 
for( let i = 0; i < peoples.length; i++ ) {
   let person = peoples[i];
   console.log(person.name + ' ' + person.age);

}
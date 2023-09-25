export let employees: string[] = ['Doriancito', 'Milenita', 'Darianita', 'Dilanchin'];

let salaries: number[] = [1500, 2400, 3200, 2000];

let flowers: string[] = ['Rosa', 'Girasol', 'Lirio'];

// if (people[1] === undefined) {
//    console.log('No hay persona en people[3]');
// } 

// for(let i = 0; i < flowers.length; i++) {
//    console.log(flowers[i]);
// }


for( let i = 0; i < employees.length; i++) {
   let employee= employees[i]
   let salary  = salaries[i];
   console.log( employee + ' tiene un salario de '+ salary );
}
export class Car {

    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    createAt: number;

    constructor() {
        this.brand = 'No brand';
        this.doors = 0;
        this.fuelTank = 100;
        this.isRunning = false;
        this.type = 'No type'

        this.createAt = 123456789;
    }

    turnOn() {
        if ( this.isRunning) {
            console.log('El carro ya estaba encendido...se dañó el motor');
            return
        } 

        if ( this.fuelTank <= 0) {
            console.log('El carro no tiene gasolina');
            return
        }
        
        this.isRunning = true;
        console.log('El carro está encendido');
        
    }

    fillTank( gas:number ) {
        if ( gas <= 0 ) {
            console.log('El gas tiene que ser positivo');
            return; // el return hace que pare y vuelve a ejecutar la misma función que no siga a las lineas de abajo
        }

        let newFuelTank = this.fuelTank + gas;

        if ( newFuelTank >= 100) {
            this.fuelTank = 100;
        } else {
            this.fuelTank = newFuelTank;
        }

    }
}

let myMazda = new Car(); // Instancia (llamada)

console.log(myMazda);
myMazda.fillTank(50);
myMazda.fillTank(20);
// myMazda.turnOn();
console.log(myMazda);




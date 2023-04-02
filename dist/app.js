"use strict";
//Vehicle Class
class Vehicle {
    _make;
    _model;
    _year;
    _rented;
    constructor(_make, _model, _year, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    rentedStatus(status) {
        this._rented = status;
    }
    rent() {
        if (this.rented) {
            console.log(`Sorry this ${this._model} is already rented`);
        }
        else {
            this._rented = true;
            console.log(`Thank You for renting this ${this._model}!`);
        }
    }
    return() {
        if (this.rented) {
            this._rented = false;
            console.log(`Thank You for returning this ${this._model}!`);
        }
        else {
            console.log(`This ${this._model} is available for rent`);
        }
    }
}
//Car Class
class Car extends Vehicle {
    _seatCapaity;
    constructor(_make, _model, _year, _rented, _seatCapacity) {
        super(_make, _model, _year, _rented);
        this._seatCapaity = _seatCapacity;
    }
    seatCapacity() {
        return this._seatCapaity;
    }
    rentalRate() {
        if (this.make === "Toyota") {
            return 120;
        }
        else if (this.make === "Honda") {
            return 100;
        }
        else if (this.make === "Suzuki") {
            return 70;
        }
        else if (this.make === "Kia") {
            return 90;
        }
        else {
            return 50;
        }
    }
}
//MotoCycle Class
class MotorCycle extends Vehicle {
    _engineSize;
    _speed;
    constructor(_make, _model, _year, _rented, _engineSize, _speed) {
        super(_make, _model, _year, _rented);
        this._engineSize = _engineSize;
        this._speed = _speed;
    }
    speedIndicator() {
        if (this._speed >= 150) {
            return "You are riding too fast. Please ride slow";
        }
        else if (this._speed >= 100 && this._speed < 150) {
            return "You are riding fast. Ride Carefully";
        }
        else {
            return "You are riding at a good speed.";
        }
    }
    rentalRate() {
        return this._engineSize >= 125 ? 300 : 200;
    }
}
//Truck Class
class Truck extends Vehicle {
    _payloadCapacity;
    numWheels;
    constructor(_make, _model, _year, _rented, _payloadCapacity, _numWheels) {
        super(_make, _model, _year, _rented);
        this._payloadCapacity = _payloadCapacity;
        this.numWheels = _numWheels;
    }
    getNumWheels() {
        return this.numWheels;
    }
    rentalRate() {
        return this._payloadCapacity >= 2000 ? 1000 : 500;
    }
}
//Car
const myCar = new Car("Toyota", "Corolla", 2017, false, 6);
console.log(myCar);
console.log(myCar.make); //Toyota
console.log(myCar.model); //Corolla
console.log(myCar.year); //2017
console.log(myCar.rented); //false
console.log(myCar.rentalRate()); //120
console.log(myCar.seatCapacity()); //6
myCar.rent(); //Thank You for renting this Corolla!
myCar.rent(); //Sorry this Corolla is already rented
myCar.return(); //Thank You for returning this Corolla!
myCar.return(); //This Corolla is available for rent
//MotorCycle
const myMotorCycle = new MotorCycle("Honda", "cd70", 2019, true, 150, 120);
console.log(myMotorCycle);
console.log(myMotorCycle.make); //Honda
console.log(myMotorCycle.model); //cd70
console.log(myMotorCycle.year); //2019
console.log(myMotorCycle.rented); //true
console.log(myMotorCycle.rentalRate()); //300
console.log(myMotorCycle.speedIndicator()); //You are riding fast. Ride Carefully.
myMotorCycle.rent(); //Sorry this cd70 is already rented
myMotorCycle.rent(); //Sorry this cd70 is already rented
myMotorCycle.return(); //Thank You for returning this cd70!
myMotorCycle.return(); //This cd70 is available for rent
myMotorCycle.rent(); //Thank You for renting this cd70!
// Truck
const myTruck = new Truck("Hino Pak", "Dutro", 2014, false, 2500, 6);
console.log(myTruck);
console.log(myTruck.make); //Hino Pak
console.log(myTruck.model); //Dutro
console.log(myTruck.year); //2014
console.log(myTruck.rented); //false
console.log(myTruck.rentalRate()); //1000
console.log(myTruck.getNumWheels()); //6
myTruck.rent(); //Thank You for renting this Dutro!
myTruck.rent(); //Sorry this Dutro is already rented
myTruck.return(); //Thank You for returning this Dutro!
myTruck.return(); //This Dutro is available for rent
//setter
console.log(myCar.rented); //false
myCar.rentedStatus(true);
console.log(myCar.rented); //true
console.log(myMotorCycle.rented); //true
myMotorCycle.rentedStatus(false);
console.log(myMotorCycle.rented); //false
console.log(myTruck.rented); //false
myTruck.rentedStatus(true);
console.log(myTruck.rented); //true
//# sourceMappingURL=app.js.map
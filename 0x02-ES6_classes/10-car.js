class Car {
    constructor(brand, model, color) {
        this._brand = brand;
        this._model = model;
        this._year = color;
    }

    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }

    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }

    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }

    cloneCar() {
        return new this.constructor();
    }
   
}

export default Car;
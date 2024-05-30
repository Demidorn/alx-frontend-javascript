import Building from './5-building.js';

class SkyHighBuilding {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    }

    get floors() {
        return this.floors;
    }

    evacuationWarningMessage() {
        return 'Evacuate slowly the ${this._floors} floors.';
    }
}

export default SkyHighBuilding;
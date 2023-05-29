/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    
    this.parking_slot_info = new Map()
    this.big = big
    this.medium = medium
    this.small = small
    this.parking_slot_info.set(1, [ 0, big] )
    this.parking_slot_info.set(2, [0, medium] )
    this.parking_slot_info.set(3, [0, small] )
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    
    if( this.parking_slot_info.has(carType) ) {
        
        let info = this.parking_slot_info.get( carType )
        let occupied_size = info[0]
        let allowed_size = info[1]
        
        if( occupied_size + 1 <= allowed_size ) {
             info[0] = info[0] + 1
             this.parking_slot_info.set(carType, info )
             return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
    
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
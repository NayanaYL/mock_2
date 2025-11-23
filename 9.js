function displayCar(){
    console.log("this is car")
}
function displayTruck(){
    console.log("this is truck")
}
function displayBike(){
    console.log("this is bike")
}
function vehicleinfo(vehicleCategory,callbackFn){
    console.log("vehicle category",vehicleCategory)
    callbackFn();
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)

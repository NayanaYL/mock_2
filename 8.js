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
    console.log("vehical category",vehicleCategory)
    callbackFn();
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
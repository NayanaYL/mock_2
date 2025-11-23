//1
let arr1=[10,20,30];
let arr2=[40,50];
let combined=[...arr1,...arr2]
console.log(combined)

//2
let person={name:"venu",age:25}
let extra={city:"Bengaluru"}
let profile={...person,...extra}
console.log(profile)

//3
function sumAll(...nums){
    return nums.reduce((acc,el)=>acc+el,0)

}
console.log(sumAll(1,2,3,4))

//4
let numbers = [10, 20, 30, 40, 50];
let [a, ...remaining]=numbers
console.log(a)
console.log(remaining)

//5
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let{
    address:{
        city,geo:{lat,lng}
    }
}=user;
console.log(city,lat,lng)

//6
//function multiply(a, b) {
  //return a * b;
//}
const multiply=(a,b)=>a*b;

//7
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
let role=emp?.details?.profile?.role
console.log(role)
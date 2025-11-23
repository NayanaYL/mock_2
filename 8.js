let nums = [10, 3, 7, 20, 13, 2];
let squares=nums.map((n)=>n*n);
let primes=nums.filter((n)=>{
    if (n<2) return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0)return false
    }
    return true;
});
let totalSum=nums.reduce((acc, el)=>acc+el,0);
let decending=[...nums].sort((a,b)=>b-a);
console.log("Square",squares)
console.log("primes",primes)
console.log("sum",totalSum)
console.log("decending",decending)
// filter method returns a new array when all elements pass the test defined
let numbers= [1,2,3,4,5,6,7,8,9,10];
//  function that checks if even
function checkeven(number){
    if (number%2 ==0)
    return true;

    else 
     return false;
    
    
    }


 let even=numbers.filter(checkeven);
 console.log(even);

 const prices=[1800,2000,null,3000,5000,"Thousand",500,8000]

 function checkPrice (element){
return element>2000 && !Number.isNaN(element);

 }
 let filteredprices=prices.filter(checkPrice);
 console.log(filteredprices);

 let newPrices = prices.filter((price)=> (price>2000 && !Number.isNaN(price)));
console.log(newPrices);


var arr=["apple","mango","apple","orange","mango","mango"]

function checkpresent(element){
    return element>arr.length<2;

}
let filteredfruits=arr.filter(checkpresent);
console.log(filteredfruits);


// .length in strings
let word = "beautifull";
let len= word.length;
console.log(len);
let part=word.slice(6,10)
console.log(part)


// .length in an array to find elements
let city = ["Nairobi","Eldoret","Kisumu","Kitale","Nanyuki"];
console.log(city.length);

// using array .length in for loop
for (i =0; i<city.length;i++){
    console.log(city[i])
}

// changing the length property in an array
city.length=3;
console.log(city);
let city1 = city.slice(-2);
console.log(city1);
city.length=Math.min(city.length,6);
console.log(city.length)

city.length=6
console.log(city)

let add=city.push("Kitale","Nanyuki","kigali")
console.log(city)
console.log(city.length)

let numbers=[1,2,3,4,5,6]
for(i=0;i<numbers.length;i++){
    console.log(numbers[i])
}




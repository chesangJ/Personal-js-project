// concat
let odd=[1,3,5,7,9];
let even=[2,4,6,8];
let joinedArray=odd.concat(even,10);
console.log(joinedArray);
let randomList=[10,11,12]
let nestedList=[
    [13,14,15],
    [16,17,18]

]
nestedList[0].push (12);
console.log(nestedList);
let combinedList= joinedArray.concat(nestedList);
console.log(combinedList);

// unshift adds an element to the start of a list
let x= ["First","second","third", "fourth"];
x.unshift("Zero");
console.log(x);
function order(element,index){
    console.log("count" + index +";" + element)
}
 x.forEach(order)
 
let food =["ear","mouth","toungue"]
food[3]="nose";
console.log(food);
food.shift()
console.log(food)

// splice,add,remove,replace
let evenNumbers=[2,4,6,8,10];
let splice= evenNumbers.splice(6,2,11,12);
// console.log(splice);
console.log(evenNumbers);


// slice
let numbers=[1,2,3,4,5,6,7,8,9,10];
let newArray= numbers.slice(0,7);
console.log(newArray);

// for each method
let each=[2,3,4,5,6]
function compute(x){
    console.log(x*3);
}
each.forEach(compute);

// const array =[[4.23,6.23],1.23,3.44,[1.342,3.212]]
// function compute(i){
    // console.log(i*i);
// }
// array.forEach(compute);

let is_array= function(input){
    if(toString.call(input)==="[object Array]")
    return true;
    return false;

};
console.log(is_array([1,2,3,4,5,6]))
console.log(is_array("picture"))

let v=[12,23,14,16,17];
 v.push(20,30,40);
console.log(v);



let people=["Janet","Anne","Mary","Kigen"];

function names(index,element){
    console.log("number"+index+";"+element)
}
people.forEach(names);

console.log(v.concat(people,"Purity"));
console.log(people.join());
 console.log(v.pop());
 console.log(v);

 let num=[10,20,30,40,50,60];
 num.splice(1,1,15);
 console.log(num);
 num.splice(2,4,20,25,30,35);
 console.log(num);
 num.splice(0,1,5);
 console.log(num);


 var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 arr3.sort();
 console.log(arr3);
function compare(a,b){
    return a-b
}
console.log(arr3.sort(compare));
arr3.sort(function(a,b){return b-a});
console.log(arr3);

// divide the array
function divideArray(array){
    if (array.length<=1){
        return array;
    }
    let middle = Math.floor(array.length/2);
    let left=array.slice(0,middle);
    let right=array.slice(middle);
     return merge(divideArray(left),divideArray(right));
}

// merge the array
function merge(left,right){
    let emptyarray=[];
    while (left.length && right.length ){
        if(left[0]<=right[0]){
             emptyarray.push(left.shift());

        }
        else {
             emptyarray.push(right.shift());
        }

    }
    return [...emptyarray,...left,...right];
    
}


function find(array,target){
    let left=0;
    let right=array.length-1;
    while (left <=right){
        console.log("left",left);
        console.log("right",right);


        let middle=Math.floor((left+right)/2);
        if(array[middle]===target){
            return middle;
        }
        else if(array[middle]>target){
            right=middle-1;
        }

    else{
        left=middle+1;
    }
        
    }
    return null;

}
let array=[12,11,13,5,6,7];
// array= divideArray(array);
// console.log(array);
let target = 5
console.log(find(array,target));

// Given an array of unsorted numbers, return the index of the following target if 
// the target exists in the array. If the target is not found, return null

// 

function mergeSort(arr1){
    if (arr1.length<=1){
        return arr1

    }
    let middle=Math.floor(arr1.length/2);
    let left=arr1.slice(0,middle);
    let right=arr1.slice(middle);

}

function merge(left, right){
    let emptyarray=[];
    while(left && right){
        if(left[0]<= right [0]){
            emptyarray.push(left.shift())
        }
        else {
            emptyarray.push(right.shift())
        }

    }
     return[...emptyarray,...left,...right] 
}

function get(arr1,target1){
    let left=0
    let right=arr1.length-1
     while (left<right){
        let middle=Math.floor((left+right)/2);
        if(arr1[middle]===target1){
            return middle;
        }
        else if(arr1[middle]>target1){
            right=middle-1
        }
        else{
            left=middle+1
        }
     }
     return -1
}
let num1 = [45,12,6,89,2,5];
let target1=6;
console.log(get(num1,target1))

// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]





// Given the following array, search for the following target
// let target = 34

 




















































 






// arr2 = divideArray(arr2)
// console.log(arr2);










let elements=[2,4,6,8,10];

for( let x of elements){
    console.log((x)*2)
   

}

function mergeSort(num2){
    if (num2.length<=1){
        return num2
    }

    let middle=Math.floor(num2.length/2)
    let left= num2.slice(0,middle);
    let right=num2.slice(middle);
  return merge(mergeSort(left),mergeSort(right)) ; 
}
// sort the array

function merge(left,right){
    let emptyarray1=[];
    while(left.length && right.length){
        if (left[0]<=right[0]){
            emptyarray1.push(left.shift());
        }
        else{
            emptyarray1.push(right.shift());
        }
    }
    return[...emptyarray1,...left,...right];
}

let num2= [1,4,78,2,67,3];
num2=mergeSort(num2)
console.log(num2)

function find(num2,target){
    let left= 0;
    let right=num2.length-1;
    while(left<=right) {                
        let middle=Math.floor((left+right)/2);
        if(num2[middle]===target){
            return middle
        }
        else if(num2[middle]>target){
            right=middle-1
        }
        else{
            left=middle+1
        }
        
    }  
    return null
}

// let num2=[1,4,78,2,67,3];
// let target=4;
// console.log(find(num2,target));
// 1,2,3,4,67,78

// let arr2=[123,89,5,23,9,56];
// let target2=9
// console.log(find(arr2,target2))


// function find(arr2,target2){
    // let left=0;
    // let right=arr2.length-1;
    // while(left<=right){
        // let middle=Math.floor((left+right)/2);
        // if (arr2[middle]===target2){
            // return middle;
        
        // }
        // else if(arr2[middle]>target2){
            // right=middle-1;
        // }
        // else{
            // left=middle+1;
        // }
    // }
    // return null
// }

// let arr2=[123,89,5,23,9,56];
// let target2=9
// console.log(find(arr2,target2))

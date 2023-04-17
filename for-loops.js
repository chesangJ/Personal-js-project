const people=[2,4,6,8,10];
 let person=[]
 for (let i=0;i<people.length;i++){
    person+= people[i]*2 + " ";
 }
 console.log(person);


 function array2(num1){
   let emptyArray=[]

   for(let i=0;i<num1.length;i++){

       if(i<4){
         emptyArray+=digits[i]*8 + " "
       }
       else if(i>=num1.length-2 ){
         emptyArray+=digits[i]+5 + " "


       }
     
       }
       console.log(emptyArray);


   }
   let digits=[2,4,5,6,8,10]

console.log(array2(digits))
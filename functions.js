
// Write a JavaScript function that reverse a number.

function reverse(x){

    let reversenum =  parseInt(x.toString().split('').reverse().join(''));
    return reversenum;


}
let number =32243
console.log(reverse(number))


// Write a JavaScript function that checks whether a passed string is palindrome or not?
function palindrome(string){
    
    let reversestring = string.split('').reverse().join('');
    return string ===reversestring
}
let phrase="madam or nurses run fox"
console.log(palindrome(phrase))

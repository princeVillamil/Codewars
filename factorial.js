/*
Your task is to write function factorial.
*/
function factorial(n){
    //your code here
    return n ? n*factorial(n-1) : 1
}
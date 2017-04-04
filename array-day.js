// Create a function that finds the highest number.
//
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign it a reasonable start value; then use forEach: if an element is higher than max, change max.

var highestNumber = [-0.5, -0.3, -0.7, -0.4, -0.2]
var max = -Infinity

highestNumber.forEach(function(i) {
	if (i > max){
    max = i
  }
})
max



// Create a function that finds the smallest number (the closest to zero).
// smallestNumber([1,4,2]) should return 1
// smallestNumber([0.1,0.01,0.001]) should return 0.001
// smallestNumber([-1,-2,-4]) should return -1
// smallestNumber([0.1,-0.001]) should return -0.001

var smallestNumber = [-0.5, -0.1, 0.7, 0.4, 0.2]
var min = Math.abs(smallestNumber[0])

smallestNumber.forEach(function(i) {
	if (Math.abs(i) < min){
    min = i
  }
})
min





// Create a function that calculate the sum.
// sum([1,2,3]) should return 6
// sum([]) should return 0

var sumArray = [1,2,3]
var sum = 0
sumArray.forEach(function(n) {
  sum = sum +n
})
sum




// Create a function that calculate the mean value
// mean([1,2,3]) should return 2

var sumArray = [1,2,3]
var sum = 0
sumArray.forEach(function(n) {
  sum = sum +n
})
sum/sumArray.length






// Create a function that finds the index of the highest number.
// indexHighestNumber([1,4,2]) should return 1
// indexHighestNumber([-1,-2,-4]) should return 0

var highestNumber = [0.7, 0.3, 0.1, 0.4, 0.2]
var max = 0

highestNumber.forEach(function(i) {
	if (i > max){
    max = i
  }
})
highestNumber.lastIndexOf(max)







// Arrays of Strings
// Create an array with your siblings names, and an array with your parents names.
// Sort your siblings names in alphabetical order.
// Sort your parents names in reverse alphabetical order.
// Sort all the names in alphabetical order.
// Hint: Combine the arrays into a single array.
// Sort all the names in reverse alphabetical order.
// Create a function that determines if a given name is amongst the names.

var parents = ["Karen", "Ron", "Marvin", "Lynda"]
var siblings = ["Andree", "Spencer", "Avi", "Noah"]

parents.sort (function(a, b){
return (a>b) * 1 + (a<b) * -1
})








// Create a function that returns an array with only the even elements from the array.
//
// evenElements([1,2,3,4]) should return [2,4]
// Hint: use the % operator
// What happens if there are no even numbers?

var evenOrOdd = [1, 2, 3, 4, 5, 6]
var evenOnly = []
var n = 0

evenOrOdd.forEach(function(n){
  if (n % 2 === 0){
      evenOnly = evenOnly.concat(n)
  }})
evenOnly







//that time we solved the next challenge a different way

function mapArray(array, fun) {
  var returnArray = []
  array.forEach(function(x) {
    x = fun(x)
    returnArray = returnArray.concat(x)
  })
  return returnArray
}






// Create a function that take an array and a function, and returns a new array with return value of the function on each of the elements of the array.
//
// mapArray([5,6], function(x) { return 2*x; }) should return [10,12]
// Hint: function mapArray(array, fun) { var returnArray = []; ... return returnArray; }
// Hint: use forEach on the given array to append the return value of the function applied to each element
var mapArray = [1, 2]
var returnArray = []
var x = 0

mapArray.forEach(function(x){
      x = 2 * x
      returnArray = returnArray.concat(x)
  })
returnArray
mapArray([2,3],function(x) {return x*2})






// Create a function that take an array and a function, and returns a new array with only the elements for which the function returns true.
//
// filterArray([5,6,7], function(x) { return x>=6; }) should return [6,7]
// Hint: create a new array and use forEach on the given array, only appending the element if the function returns true
function filterArray(array, fun) {
  var returnArray = []
  array.forEach(function(y) {
    if (fun(y) === true) {
      debugger
    returnArray = returnArray.concat(y)
  }})
  return returnArray
}
filterArray([5,6,7], function(x) {return x>=6})

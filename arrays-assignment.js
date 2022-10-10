/* 1. Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places. */
/*
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
Places
*/

//Input
let arr1=[ 1, 2, 3, 4, 5 ];

let sumOfNumsAtOddPlaces=0;
let sumOfNumsAtEvenPlaces=0;
let numOfEleInOddPlaces=0;
let numOfEleInEvenPlaces=0;

arr1.forEach((v,i)=>{
    if(((i+1)%2)===0){
        sumOfNumsAtEvenPlaces+=arr1[i];
        numOfEleInEvenPlaces++;
    }else{
        sumOfNumsAtOddPlaces+=arr1[i];
        numOfEleInOddPlaces++;
    }
});

//Finding gcd
let sumOfNumsAtOddPlacesFactorials=[];
let gcd=0;
 for(let i=1;i<=sumOfNumsAtOddPlaces;i++){
    if(sumOfNumsAtOddPlaces%i==0){
        sumOfNumsAtOddPlacesFactorials.push(i);
    }
 }
 for(let i=1;i<=sumOfNumsAtEvenPlaces;i++){
    if(sumOfNumsAtEvenPlaces%i==0 && sumOfNumsAtOddPlacesFactorials.includes(i) && i>gcd){
        gcd=i;
    }
 }

//Output
console.log("1 Sum of Numbers at Odd Places: "+sumOfNumsAtOddPlaces);
console.log("1 Sum of Numbers at Even Places: "+sumOfNumsAtEvenPlaces);
console.log("1a Difference between the two sums: "+Math.abs(sumOfNumsAtEvenPlaces-sumOfNumsAtOddPlaces));
console.log("1b Number of elements in odd places: "+numOfEleInOddPlaces);
console.log("1c Number of elements in even places: "+numOfEleInEvenPlaces);
console.log("1d Average of all elements in the array: "+((sumOfNumsAtOddPlaces+sumOfNumsAtEvenPlaces)/arr1.length));
console.log("1e GCD: "+gcd);


/* 2. Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays.*/

//Input1
let arr1ToCheck4=[ 1, 2, 3, 4, 5 ];
//Input2
let arr2ToCheck4=[ 4, 6, 1, 8, 2 ];

if(arr1ToCheck4.includes(4) && arr2ToCheck4.includes(4)){
    console.log("2: 4 in both arrays");
}else if(arr1ToCheck4.includes(4)){
    console.log("2: 4 in array 1");
}else if(arr2ToCheck4.includes(4)){
    console.log("2: 4 in array 2");
}else{
    console.log("2: 4 doesnt exist in any of the arrays");
}

/* 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array. */
let unFlattenedArr=[ 1, 2, [ 3, 4, [ 5 ] ] ];
let flattenedArr=[];
flattenedArr[0]=unFlattenedArr[0];
flattenedArr[1]=unFlattenedArr[1];
flattenedArr[2]=unFlattenedArr[2][0];
flattenedArr[3]=unFlattenedArr[2][1];
flattenedArr[4]=unFlattenedArr[2][2][0];

//Output
console.log("3: "+flattenedArr);

/* 4. Write a JavaScript program to take an array as input from the user and:
a) Store all duplicate elements in a separate array
b) Remove the duplicate elements from the original array */

//Input
let duplicateArr=[ 1, 2, 3, 2, 3, 4, 5 ];
let duplicateArrTemp=[];
let onlyDuplicateArr=[];
for(let i=0;i<duplicateArr.length;i++){
if((duplicateArr.slice(i+1)).includes(duplicateArr[i])){
    if(!onlyDuplicateArr.includes(duplicateArr[i])){
    onlyDuplicateArr.push(duplicateArr[i]);
    }
}
if(!duplicateArrTemp.includes(duplicateArr[i])){
    duplicateArrTemp.push(duplicateArr[i]);
    }
}
console.log("4 Duplicate Elements ="+onlyDuplicateArr);
console.log("4 Array without duplicate elements ="+duplicateArrTemp);



/* 5. Debug the given JavaScript program and execute the correct code. */

function thirdLargest(arr, arr_size)
{
/* There should be
at least three elements */
if (arr_size < 3){
console.log(" Invalid Input "); 
return;
}
let first = arr[0];
for (let i = 1;i < arr_size ; i++){
if (arr[i] > first){
    //updated
 first=arr[i];
}
}
let second = Number.MIN_VALUE;
for(let i = 0;i < arr_size ; i++){
    //updated
if (arr[i] < first && arr[i] > second){
    //updated
 second=arr[i];
}
}
let third = Number.MIN_VALUE; 
for (let i = 0;i < arr_size ; i++){
    //updated
if (arr[i] > third && arr[i] < second){
third = arr[i];
}
}
console.log("5 The third Largest " + "element is ", third);
 }

//Input
let arr = [12, 13, 1, 10, 34, 16];
let n = arr.length;

//Calling function for Output
thirdLargest(arr, n);


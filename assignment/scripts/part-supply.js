console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
let partsNeeded = 40

console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges =[ 3 , 5 , -6 , 0, 7, 11]

console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
let Removed= 11
supplyChanges.splice(6 , 1)
console.log('4. Removed item:', Removed);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push(25)
console.log('5. Adding 25 to supplyChanges.', supplyChanges[6]);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');

for( let i=0; i<supplyChanges.length; i++){
  console.log(supplyChanges[i]);

  if (supplyChanges[i]>0) {
    console.log ('Added' +  supplyChanges[i]  + 'parts')
}

  else if (supplyChanges[i]===0) {
    console.log ('No Change')
}

  else if (supplyChanges[i]<0) {
    console.log ('Removed' +  supplyChanges[i]  + 'parts')
  }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
{
  console.log('7.Showing supplyChanges with "for of" loop')};
for (parts of supplyChanges)
{
  console.log('7.Showing supplyChanges');
if (parts > 0) {
  console.log ('Added' + parts + 'parts')
}
if (parts === 0) {
  console.log ('No Change')
}
if (parts<0) {
  console.log ('Removed' + parts + 'parts' )
}};

// 8. Rewrite the `for` loop from #6 as a `while` loop.
let index= 0
const max= (supplyChanges[supplyChanges.length-1])

while(index<max)
{
  console.log('8. While loop supply changes')
  if ( supplyChanges[index]> 0) {
    console.log ('Added' + supplyChanges[index] + 'parts')
  }
  if ( supplyChanges[index] === 0) {
    console.log ('No Change')
  }
  if ( supplyChanges[index] <0) {
    console.log ('Removed' + supplyChanges[index] + 'parts' )
  };index++}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');

let sum=0
for (let i = 0; i < supplyChanges.length; i++){
  sum += supplyChanges[i];
}
console.log(sum);

module.exports = function getZerosCount(number) {
  // your implementation
  let count=0;
  for(let i=5; i<=number; i=i*5)
  {
     count+=Math.floor(number/i);
  }
return count;
}

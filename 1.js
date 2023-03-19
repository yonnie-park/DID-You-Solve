function isPrime(num){
  if(num==1) return false
  if(num==2 ||num==3) return true
  if(num%2==0 || num%3==0) return false
  for(let i=5; i*i<=num; i+=6){
    if(num%i==0|| num%(i+2)==0) return false
  }
  
  return true
}

function countPrimeTriplets(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        const sum = numbers[i] + numbers[j] + numbers[k];

        if (isPrime(sum)) {
          count++;
        }
      }
    }
  }

  return count;
}

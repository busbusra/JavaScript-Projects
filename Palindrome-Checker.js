function palindrome(str) {
  let arr=str.split("").filter(e=>/[a-zA-Z1-9]/ig.test(e)).map(e=>e.toLowerCase());
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==arr[arr.length-i-1]){
return false;
    }
  }
  return true;
}

console.log(palindrome("1 eye for of 1 eye."));

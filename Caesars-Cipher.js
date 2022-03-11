function rot13(str) {
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 let arr=str.split("").map(e=>e.toUpperCase());
 let newArr=[];
 for(let i=0;i<arr.length;i++){
   if(/[A-Z]/.test(arr[i])){
       for(let k=0;k<alphabet.length;k++){
         if(alphabet[k]==arr[i]){
           if(k<=12){
           newArr.push(alphabet[k+13]);
           }
           else if(k>12){
           newArr.push(alphabet[k-13]);
           }
         }
       } 
   }
   else{
     newArr.push(arr[i]);
   }
 }
  return newArr.join("");
}

console.log(rot13("SERR PBQR PNZC"));

function telephoneCheck(str) {
  let arr=str.split("");
  let digitArr=str.split("").filter(e=>/[0-9]/.test(e));
  if(arr.some(val=>/[^0-9()-\s]/.test(val))){return false;}

  if(arr[0]=="-"){return false;}
  if(arr[0]=="("&arr[arr.length-1]==")"){return false;}

  let line=[];
  for (let i=0;i<arr.length;i++){
    if(arr[i]=="-"){
      line.push(arr[i]);
    }
  }
  if(line.length>2){return false;}
   
  if(digitArr.length==11){
    if(digitArr[0]==1){
      if(arr.some(val=>val=="(")){
      return arr.some(val=>val==")");}
      if(arr.some(val=>val==")")){
      return arr.some(val=>val=="(");}
      return true;}
    }

  if(digitArr.length==10){
    if(arr.some(val=>val=="(")){
      return arr.some(val=>val==")");}
       if(arr.some(val=>val==")")){
      return arr.some(val=>val=="(");}
    return true;
  }
  return false;
}


console.log(telephoneCheck("55 55-55-555-5"));

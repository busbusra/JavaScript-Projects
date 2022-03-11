function convertToRoman(num) {
  // I=1, V=5, X=10, L=50, C=100, D=500, and M=1000,
  let arr=num.toString().split("");
  let newArr=[];
  let roman=[];
  for(let i=0;i<arr.length;i++){
    newArr[i]=arr[arr.length-1-i];
  }
  for(let i=0;i<newArr.length;i++){
    //ones digit
    
      switch (parseInt(newArr[i])){
    case 0:
    break;
    case 1:
    if(i==0){roman[i]="I";}
    if(i==1){roman[i]="X";}
    if(i==2){roman[i]="C";}
    if(i==3){roman[i]="M";}
    break;
    case 2:
    if(i==0){roman[i]="II";}
    if(i==1){roman[i]="XX";}
    if(i==2){roman[i]="CC";}
    if(i==3){roman[i]="MM";}
    break;
    case 3:
    if(i==0){roman[i]="III";}
    if(i==1){roman[i]="XXX";}
    if(i==2){roman[i]="CCC";}
    if(i==3){roman[i]="MMM";}
    break;
    case 4:
    if(i==0){roman[i]="IV";}
    if(i==1){roman[i]="XL";}
    if(i==2){roman[i]="CD";}
    break;
    case 5:
    if(i==0){roman[i]="V";}
    if(i==1){roman[i]="L";}
    if(i==2){roman[i]="D";}
    break;
    case 6:
    if(i==0){roman[i]="VI";}
    if(i==1){roman[i]="LX";}
    if(i==2){roman[i]="DC";}
    break;
    case 7:
    if(i==0){roman[i]="VII";}
    if(i==1){roman[i]="LXX";}
    if(i==2){roman[i]="DCC";}
    break;
    case 8:
    if(i==0){roman[i]="VIII";}
    if(i==1){roman[i]="LXXX";}
    if(i==2){roman[i]="DCCC";}
    break;
    case 9:
    if(i==0){roman[i]="IX";}
    if(i==1){roman[i]="XC";}
    if(i==2){roman[i]="CM";}
    break;
    }
  }
  let newRoman=[];
  for(let i=0;i<roman.length;i++){
    newRoman[i]=roman[roman.length-1-i];
  }  
 return newRoman.join("");
}

console.log(convertToRoman(1000));

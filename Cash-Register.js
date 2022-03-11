function checkCashRegister(price, cash, cid) {
  let currencyUnit=[0.01,0.05,0.1,0.25,1,5,10,20,100];
  let message={status:"",change:[]}
  let change=cash-price;
  let moneyIn=[];
  let sum=0.00;
  for(let i=0;i<cid.length;i++){
    sum=(parseFloat(sum)+parseFloat(cid[i][1])).toFixed(2);
  }
  if(sum==change){
    message["status"]="CLOSED";
    message["change"]=cid;
    return message;
  }
  else if(sum>change){
    message["status"]="OPEN";
    //calculating change
    let estUnit=[];
    for(let i=0;i<currencyUnit.length;i++){
      if(change>=currencyUnit[i]){
        estUnit.push(currencyUnit[i]);}
    }
    let changeLeft=change;
    for(let k=0;k<estUnit.length;k++){
      if(cid[estUnit.length-1-k][1]>changeLeft&changeLeft!=0){
        if(estUnit.length-1-k==8){
          cid[estUnit.length-1-k][1]=cid[estUnit.length-1-k][1]-100*(Math.floor(changeLeft/100));
          message["change"].push([cid[estUnit.length-1-k][0],100*(Math.floor(changeLeft/100))]);
          changeLeft=changeLeft%100;
        }
        else if(estUnit.length-1-k==7){
          cid[estUnit.length-1-k][1]=cid[estUnit.length-1-k][1]-20*(Math.floor(changeLeft/20));
          message["change"].push([cid[estUnit.length-1-k][0],20*(Math.floor(changeLeft/20))]);
          changeLeft=changeLeft%20;
        }
        else if(estUnit.length-1-k==6){
          cid[estUnit.length-1-k][1]=cid[estUnit.length-1-k][1]-10*(Math.floor(changeLeft/10));
          message["change"].push([cid[estUnit.length-1-k][0],10*(Math.floor(changeLeft/10))]);
          changeLeft=changeLeft%10;
        }
        else if(estUnit.length-1-k==5){
          cid[estUnit.length-1-k][1]=cid[estUnit.length-1-k][1]-5*(Math.floor(changeLeft/5));
          message["change"].push([cid[estUnit.length-1-k][0],5*(Math.floor(changeLeft/5))]);
          changeLeft=changeLeft%5;
        }
        else if(estUnit.length-1-k==4){
          cid[estUnit.length-1-k][1]=cid[estUnit.length-1-k][1]-Math.floor(changeLeft/1);
          message["change"].push([cid[estUnit.length-1-k][0],(Math.floor(changeLeft/1))]);
          changeLeft=changeLeft%1;
        }
        else if(estUnit.length-1-k==3){
          cid[estUnit.length-1-k][1]=cid[estUnit.length-1-k][1]-0.25*(Math.floor(changeLeft/0.25));
          message["change"].push([cid[estUnit.length-1-k][0],0.25*(Math.floor(changeLeft/0.25))]);
          changeLeft=changeLeft%0.25;
        }
           else if(estUnit.length-1-k==2){
          cid[estUnit.length-1-k][1]=cid[estUnit.length-1-k][1]-0.1*(Math.floor(changeLeft/0.1));
          message["change"].push([cid[estUnit.length-1-k][0],0.1*(Math.floor(changeLeft/0.1))]);
          changeLeft=changeLeft%0.1;
        }
           else if(estUnit.length-1-k==1&changeLeft>=0.05){
          cid[estUnit.length-1-k][1]=cid[estUnit.length-1-k][1]-0.05*(Math.floor(changeLeft/0.05));
          message["change"].push([cid[estUnit.length-1-k][0],0.05*(Math.floor(changeLeft/0.05))]);
          changeLeft=changeLeft%0.05;
        }
           else if(estUnit.length-1-k==0&changeLeft>=0.01){
          cid[estUnit.length-1-k][1]=cid[estUnit.length-1-k][1]-0.01*(Math.floor(changeLeft/0.01));
          message["change"].push([cid[estUnit.length-1-k][0],(0.01*(Math.floor(changeLeft.toFixed(2)/0.01)))]);
          changeLeft=(changeLeft%0.01).toFixed(2);
        }
        else if(estUnit.length-1-k==0&changeLeft>cid[estUnit.length-1-k][1]){
           message["status"]="INSUFFICIENT_FUNDS";
           message["change"]=[];
        }

       
        }
        else if(cid[estUnit.length-1-k][1]==changeLeft&changeLeft!=0){
        cid[estUnit.length-1-k][1]=(cid[estUnit.length-1-k][1]-changeLeft).toFixed(2);
        message["change"].push([cid[estUnit.length-1-k][0],changeLeft]);
        changeLeft=0;
        }

      else if(cid[estUnit.length-1-k][1]<changeLeft){
        changeLeft-=cid[estUnit.length-1-k][1];
        changeLeft=changeLeft.toFixed(2)
        message["change"].push([cid[estUnit.length-1-k][0],cid[estUnit.length-1-k][1]]);
        if(estUnit.length-1-k==0&changeLeft!=0){
          message["status"]="INSUFFICIENT_FUNDS";
          message["change"]=[];
        }
      }
    }
    return message;
  }
  else if(sum<change){
    message["status"]="INSUFFICIENT_FUNDS";
    return message;
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

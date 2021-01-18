'use strict';

const arr = [4, -2, 5, 10, -13, 0, 1];

function arrFunc(){
  let a = arr[0];
  for(let i=0;i<arr.length-1;i++){
    if(a >arr[i+1]){
      continue;
    }else{
      a = arr[i+1];
    }
  }
  console.log(a);
}
arrFunc();

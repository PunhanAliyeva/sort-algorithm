let arr=[2,6,8,12,19,21,24];
let target=6;
for (let i = 0; i < arr.length; i++) {
    if(target<arr[i/2]){
     for (let j = 0; j < arr.length/2; j++) {
      if(target==arr[j]){
        console.log(j);
        break;
      }
     }
    }
else if(target==arr[i/2]){
    console.log(i/2);
    break;
}
else{
    if(target>arr[i/2]);
    for (let p= 0; p < arr.length; p++) {
       if(target==arr[p]){
        console.log(p);
        break;
       }
    }
   
}
}
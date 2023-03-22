var arr1=[4,8,5,9,1,6,2];
var arr2=[1,8,6,11,9,5,4];
let count=0;
for (let i = 0; i < arr1.length; i++) {   
 for (let j =0; j < arr2.length; j++) {
    if(arr1[i]==arr2[j]){
        count++;
    }
}
}
    if(count==arr1.length){
        console.log(true);
    }
    else{
        console.log(false);
    }


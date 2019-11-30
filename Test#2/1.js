let a=[-31.4,4.5,1.3,-41.23,-23,190,21]
let i
let sum=0
let maxI
let n1=0
let neg=0
let max=0
for ( i=0; i<a.length; i++){
    sum=sum+a[i]
    if (a[i]<0){
        neg=neg+a[i]
      n1=n1+1
        }
    if(a[i]>max){
        max=[i]
        maxI=i
    }
    
    }
    
    console.log("The sum of all elements is :",sum)
    console.log("the average of all negative numbers",neg/n1)
    console.log("the maximum value of all numbers ",Math.max(...a),maxI)
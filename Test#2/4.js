let sum=0
function s(k,p,n)
{
 for (let i=0; i<=n;i++){
    
  sum =sum+(k/(Math.sqrt(Math.abs(Math.cos(i*k)/2))))

 }
 let res = p*sum
 return res
}
console.log(s(0.1,5,10))
console.log(s(0.01,-15.6,25))
console.log(s(0.25,0.34,13))
function g(x,y)
{
    return f(x)/(Math.abs(y)+2)
}
function f(x)
{
    return Math.sin(x)+x*x
}
console.log(g(1.3,3.1))
console.log(g(-4.1,3.4))
console.log(g(7.9,-1.345))
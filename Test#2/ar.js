function matrix_create(height, width)
{
   return Array(height).fill(Array(width).fill(Math.random(1)))
}
 
let m = matrix_create(3, 3)
console.table(m)
let a = [
    [1, 2, 3.5],
    [-10, 0, -7],
    [91, 6, 4]
 ]
 console.table(a)
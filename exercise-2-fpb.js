function fpb(angka1, angka2) {

var fpb1 = []
var fpb2 = []
var tmp  = []

    for (let i = 0; i < angka1+1; i++) {
        if (angka1 % i === 0) {
            fpb1.push(i)
        } 
        
    }

    for (let j = 0; j < angka2+1; j++) {
        if (angka2 % j === 0) {
            fpb2.push(j)
        } 
        
    }
    
    for (let i = 0; i < fpb1.length; i++) {
        for (let j = 0; j < fpb2.length; j++) {
            if (fpb1[i]=== fpb2[j]) {
                tmp.push(fpb2[j])
            }
        }
        
    }
    return(tmp[tmp.length-1])
}
    
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

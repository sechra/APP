let a = {
    a1: 'object a',
    _a3: 5,
    a2: function() {
        console.log(this.a1)
        return true
    },
    set _a3(x) {
        this.a3 = x
    }
}

let b = {
    a1: 'bbbbbbbb',
    b1: 'object b'
    
}
// b.__proto__ = a
Object.setPrototypeOf(b, a)

// console.log(a)
// console.log(b)
// console.log(b.a2())
// console.log(b.a1)
// b.a1 = 55
// console.log('----------------------------')
// a.a3 = 77
// console.log(a)
// b.a3 = 88
// console.log(b)

console.log(b.a1)
console.log(a.a1)
console.log(b.__proto__.a1)

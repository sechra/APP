 


class Header{
    constructor(h1, h2) {
        this.h1 = h1
        this.h2 = h2
    }
    render(x) {
        let out = ''
        out += `<h1>${this.h1}</h1>`
        out += `<h2>${this.h1}</h2>`
        document.getElementById(x).innerHTML = out

    }
    static hello(a) {
        console.log('workkkk' + a)
    }
}

const header = new Header('Hello', 'hjkhjk')
// header.hero = 'gogogo'
header.render('header-out')
console.log(header)


class Header2 extends Header {
    constructor(h1, h2, hero) {
        super(h1, h2, hero)
        this._hero = hero
    }
    get hero() {
        return this._hero
    }
    set hero(c) {
        this._hero = c
    }
}

const header2 = new Header2('new hello', 'new site', 'ahahah')
// header2._hero = 3.1415 BAD
header2.hero = 'google'
console.log(header2.hero)
header2.render('header-out')


console.log(header2)

Header.hello('hi')

//shablon
class Header {
constructor(img, h1, h2) {
this.src = img
this.h1 = h1
this.h2 = h2
}
render(x) {
    // x- kuda otrisovyvat
    let out = ''
    out += `img src="${this.src}" alt="" class="logo">`
    out +=  `<h1>${this.h1}</h1>`
    out +=  `<h2>${this.h2}</h2>`
    document.getElementById(x).innerHTML = out
}
}

const img = 'https://cdn0.iconfinder.com/data/icons/social-media-circle-6/1024/instagram-128.png'

let header = new Header(img, 'Hello', 'world')
console.log(header)
header.render('header')

// class -> object
// metod -> risuet // render(что рисовать, куда рисовать)

// const a = {
//     key: value,
//     key2: value,
//     key3: function() {

//     }
// }
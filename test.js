var a = {'h': 1, x: []}

// eslint-disable-next-line no-undef
console.log(global)

for (let i=0; i<5 ; i++) {
    let g = f.bind(a);
    console.log(g(i));
}

function f(x) {
    console.log("this")
    this.x.push(x + 1)
    let y = x+1
    while(y>0){

        console.log(y--)
    }
    return y
}

